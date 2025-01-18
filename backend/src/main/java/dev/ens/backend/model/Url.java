package dev.ens.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
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
    private String originalUrl;
    private String shortUrl;
    private String host;
    private String shortUrlPath;
    @ElementCollection
    private List<Timestamp> clickedAt;
    private Timestamp createdAt;
    private int expirationTime;
    private boolean active;
    private Timestamp deletedAt;
}
