-- SQL script to create the database schema for tickets, teams, users, events, and event listings.
CREATE TABLE IF NOT EXISTS tickets (
    ticket_id     INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_date    DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS teams (
    team_id        INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ticket_id      INT NOT NULL,
    team_location  TEXT NOT NULL,
    CONSTRAINT fk_team_ticket
        FOREIGN KEY (ticket_id)
        REFERENCES tickets(ticket_id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT,
    CONSTRAINT uq_team_ticket UNIQUE (ticket_id)
);

CREATE TABLE IF NOT EXISTS users (
    user_id        INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ticket_id      INT NOT NULL,
    team_id        INT NULL,
    user_name      CHAR(50) NOT NULL,
    competitor_id  INT NULL,
    CONSTRAINT fk_user_ticket
        FOREIGN KEY (ticket_id)
        REFERENCES tickets(ticket_id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT,
    CONSTRAINT uq_user_ticket UNIQUE (ticket_id),
    CONSTRAINT fk_user_team
        FOREIGN KEY (team_id)
        REFERENCES teams(team_id)
        ON UPDATE RESTRICT
        ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS events (
    event_id     INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    event_date   DATE NOT NULL,
    event_desc   TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS event_listings (
    competitor_id INT NOT NULL,
    event_id      INT NOT NULL,
    CONSTRAINT pk_event_listings PRIMARY KEY (competitor_id, event_id),
    CONSTRAINT fk_listing_event
        FOREIGN KEY (event_id)
        REFERENCES events(event_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_listing_user
        FOREIGN KEY (competitor_id)
        REFERENCES users(user_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

-- Seeding
INSERT INTO tickets (order_date) VALUES
('2024-01-15'),
('2024-02-20'),
('2024-03-10');

INSERT INTO teams (ticket_id, team_location) VALUES
(1, 'New York'),
(2, 'Los Angeles'),
(3, 'Chicago');

INSERT INTO users (ticket_id, team_id, user_name, competitor_id) VALUES
(1, 1, 'Alice', 101),
(2, 2, 'Bob', 102),
(3, 3, 'Charlie', 103);

INSERT INTO events (event_date, event_desc) VALUES
('2024-05-01', 'Spring Championship'),
('2024-06-15', 'Summer Showdown'),
('2024-09-10', 'Autumn Arena');

INSERT INTO event_listings (competitor_id, event_id) VALUES
(101, 1),
(102, 2),
(103, 3),
(101, 2);

-- End of SQL script