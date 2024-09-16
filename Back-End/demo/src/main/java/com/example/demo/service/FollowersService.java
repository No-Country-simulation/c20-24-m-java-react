package com.example.demo.service;

import com.example.demo.model.Followers;
import com.example.demo.model.FollowersId;
import com.example.demo.model.User;
import com.example.demo.repository.FollowersRepository;
import com.example.demo.repository.UserCommentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FollowersService {

    private final UserCommentRepository userRepository;
    private final FollowersRepository followersRepository;

    @Autowired
    public FollowersService(UserCommentRepository userRepository, FollowersRepository followersRepository) {
        this.userRepository = userRepository;
        this.followersRepository = followersRepository;
    }

    // Obtener los seguidores de un usuario
    public List<User> getFollowers(Long userId) {
        List<Followers> followers = followersRepository.findByFollowed_Id(userId);
        return followers.stream()
                .map(Followers::getFollower)
                .collect(Collectors.toList());
    }

    // Obtener a quién sigue un usuario
    public List<User> getFollowing(Long userId) {
        List<Followers> following = followersRepository.findByFollower_Id(userId);
        return following.stream()
                .map(Followers::getFollowed)
                .collect(Collectors.toList());
    }

    // Seguir a un usuario
    public String followUser(Long followerId, Long followedId) {
        if (followerId.equals(followedId)) {
            return "No puedes seguirte a ti mismo.";
        }

        // Verificar si ya está siguiendo
        FollowersId followersId = new FollowersId(followerId, followedId);
        boolean alreadyFollowing = followersRepository.existsById(followersId);
        if (alreadyFollowing) {
            return "Ya estás siguiendo a este usuario.";
        }

        User follower = userRepository.findById(followerId)
                .orElseThrow(() -> new RuntimeException("Usuario seguidor no encontrado."));

        User followed = userRepository.findById(followedId)
                .orElseThrow(() -> new RuntimeException("Usuario a seguir no encontrado."));

        Followers follow = new Followers();
        follow.setId(followersId);
        follow.setFollower(follower);
        follow.setFollowed(followed);

        followersRepository.save(follow);
        return "Usuario " + followerId + " ahora sigue a " + followedId;
    }

    // Dejar de seguir a un usuario
    @Transactional
    public String unfollowUser(Long followerId, Long followedId) {
        FollowersId followersId = new FollowersId(followerId, followedId);
        if (!followersRepository.existsById(followersId)) {
            return "No estás siguiendo a este usuario.";
        }

        followersRepository.deleteByFollower_IdAndFollowed_Id(followerId, followedId);
        return "Usuario " + followerId + " ha dejado de seguir a " + followedId;
    }

}
