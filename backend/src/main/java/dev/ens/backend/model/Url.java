package dev.ens.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Url {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userId;
    private String originalUrl;
    private String shortUrl;
    private String host;
    private String shortUrlPath;
    @ElementCollection
    private List<LocalDate> clickedAt;
    private LocalDate createdAt;
    private int expirationTime;
    private boolean active;
    private LocalDate deletedAt;
}
