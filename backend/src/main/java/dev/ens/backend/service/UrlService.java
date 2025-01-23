package dev.ens.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.ens.backend.model.Url;
import dev.ens.backend.repository.UrlRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UrlService {

    private final UrlRepository urlRepository;

    public List<Url> getAllUrls() {
        return urlRepository.findAll();
    }

}
