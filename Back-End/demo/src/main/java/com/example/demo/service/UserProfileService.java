package com.example.demo.service;

import com.example.demo.dto.UserProfileDto;
import org.springframework.web.multipart.MultipartFile;

public interface UserProfileService {

    void addUserProfile(Long userId);
    UserProfileDto findUserProfileById(Long id);
    String upDateImagesUser(Long userProfileId, MultipartFile images);
    String upDateImagesBanner(Long userProfileId, MultipartFile images);
    UserProfileDto updateUserProfile(Long id, UserProfileDto UserProfileDtoUpDate);


}
