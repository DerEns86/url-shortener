package dev.ens.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.ens.backend.model.Url;


public interface UrlRepository extends JpaRepository<Url, Long> {
     Url findByShortUrlPath(String shortUrlPath);
}
