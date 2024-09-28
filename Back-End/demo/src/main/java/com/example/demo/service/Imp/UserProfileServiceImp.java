package com.example.demo.service.Imp;

import com.example.demo.User.User;
import com.example.demo.User.UserProfile;
import com.example.demo.dto.UserProfileDto;
import com.example.demo.exception.UserNotFoundExepcion;
import com.example.demo.exception.UserProfileNotFoundExepcion;
import com.example.demo.mapper.UserProfileMapper1;
import com.example.demo.repository.UserCommentRepository;
import com.example.demo.repository.UserProfileRepository;
import com.example.demo.service.ImageService;
import com.example.demo.service.UserProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserProfileServiceImp implements UserProfileService {

    private final UserProfileMapper1 userProfileMapper1;
    private final UserProfileRepository userProfileRepository;
    private final ImageService imageService;
    private final UserCommentRepository userCommentRepository;

    @Override
    @Transactional
    public UserProfileDto addUserProfile(UserProfileDto userProfileDto) {
        // Recuperar el usuario asociado por ID
        User user = userCommentRepository.findById(userProfileDto.userId())
                .orElseThrow(() -> new UserNotFoundExepcion("User not found with ID: " + userProfileDto.userId()));

        UserProfile userProfile = userProfileMapper1.toEntity(userProfileDto);

        userProfile.setUserImage("https://res.cloudinary.com/dfvwqsrnj/image/upload/v1727538674/206898_k79j1b.png");
        userProfile.setDescription("");
        userProfile.setLocation("");
        userProfile.setBannerImage("https://res.cloudinary.com/dfvwqsrnj/image/upload/v1727543272/cook_qpozke.webp");
        userProfile.setSocialLinks(List.of());

        userProfile.setUser(user);
        user.setUserProfile(userProfile);

        UserProfile userProfileSaved = userProfileRepository.save(userProfile);
        return userProfileMapper1.toDto(userProfileSaved);
    }


    @Override
    @Transactional(readOnly = true)
    public UserProfileDto findUserProfileById(Long id) {
        UserProfile userProfile = userProfileRepository.findById(id)
                .orElseThrow(() -> new UserProfileNotFoundExepcion("This UserProfile Does Not Exist with that ID: " + id));
        return userProfileMapper1.toDto(userProfile);
    }

    @Override
    @Transactional
    public String upDateImagesUser(Long userProfileId, MultipartFile image) {
        // Subir la imagen y obtener la URL
        String imageUrl = uploadSingleImage(image);

        // Asociar la URL de imagen a userProfile
        UserProfile userProfile = userProfileRepository.findById(userProfileId)
                .orElseThrow(() -> new UserProfileNotFoundExepcion("UserProfile not found with ID: " + userProfileId));

        // Asigna la imagen subida
        userProfile.setUserImage(imageUrl);

        // Guarda el userProfile en la base de datos
        userProfileRepository.save(userProfile);

        return userProfile.getUserImage(); // Devuelve solo la URL de la imagen
    }

    @Override
    @Transactional
    public String upDateImagesBanner(Long userProfileId, MultipartFile image) {
        // Subir la imagen y obtener la URL
        String imageUrl = uploadSingleImage(image);

        // Asociar la URL de imagen a userProfile
        UserProfile userProfile = userProfileRepository.findById(userProfileId)
                .orElseThrow(() -> new UserProfileNotFoundExepcion("UserProfile not found with ID: " + userProfileId));

        // Asigna la imagen subida
        userProfile.setBannerImage(imageUrl);

        // Guarda el userProfile en la base de datos
        userProfileRepository.save(userProfile);

        return userProfile.getBannerImage(); // Devuelve solo la URL de la imagen
    }

    @Override
    @Transactional
    public UserProfileDto updateUserProfile(Long id, UserProfileDto userProfileDtoUpDate) {
        UserProfile userProfile = userProfileRepository.findById(id)
                .orElseThrow(() -> new UserProfileNotFoundExepcion("UserProfile not found with ID: " + id));

        userProfile.setLocation(userProfileDtoUpDate.location());
        userProfile.setDescription(userProfileDtoUpDate.description());
        userProfile.setSocialLinks(userProfileDtoUpDate.socialLinks());

        UserProfile userProfileSaved = userProfileRepository.save(userProfile);
        return userProfileMapper1.toDto(userProfileSaved);
    }

    private String uploadSingleImage(MultipartFile image) {
        try {
            return imageService.uploadImage(image);
        } catch (IOException e) {
            throw new RuntimeException("Error uploading image", e);
        }
    }
}

