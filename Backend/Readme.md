Bitterzo Company 
Authentications Table 

Authentications scehma = 
        ||
CREATE TABLE Authentications (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  JOB_ROLE VARCHAR(255) NOT NULL
);

-------------------X---------------------------------