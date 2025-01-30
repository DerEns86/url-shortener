package dev.ens.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.ens.backend.model.Url;
import java.util.List;
import java.util.Optional;



public interface UrlRepository extends JpaRepository<Url, Long> {
     Url findByShortUrlPath(String shortUrlPath);
     Optional<List<Url>>findAllByUserId(String userId);
}
