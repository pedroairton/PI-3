CREATE Database pi;

USE pi;

CREATE TABLE respostas (
  id INT NOT NULL AUTO_INCREMENT,
  q1 INT NOT NULL,
  q2 INT NOT NULL,
  q3 INT NOT NULL,
  q4 INT NOT NULL,
  q5 INT NOT NULL,
  comentario text,
  realizado_em timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
