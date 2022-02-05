# === FREEDUCATION API v2.0 ===<a name="TOP"></a>

# Tata Cara dan Aturan

Jika kamu ingin berkontribusi dalam proyek ini, silahkan baca dan ikuti dokumentasi yang sudah kami buat di [File CONTRIBUTING.MD](https://github.com/OpenProjects-id/Freeducation-API-v2.0/blob/main/CONTRIBUTING.md)

Jika ada pertanyaan atau saran, bukalah issue baru atau tanyakan ke [Discord OpenProjects.id](https://discord.gg/jXzjHu9fJ7) di channel `#freeducation`

Terima Kasih.

### LINK API

[https://api-freeducation.herokuapp.com](https://api-freeducation.herokuapp.com)

### JOIN POSTMAN

[https://app.getpostman.com/join-team?invite_code=04f5f9f0913613e0900826177d046bbc&ws=6bf74b8e-1b0e-4fb5-824a-3a4989f2c7ae](https://app.getpostman.com/join-team?invite_code=04f5f9f0913613e0900826177d046bbc&ws=6bf74b8e-1b0e-4fb5-824a-3a4989f2c7ae)

## Update 7 Des 21

- Register User
- Login User
- Logout User
- Get Profile

## THE APIs

| KET                  | METHOD | URL            | KEY (required)                                           | Optional                 |
| -------------------- | ------ | -------------- | -------------------------------------------------------- | ------------------------ |
| Register User        | POST   | /register      | nama, email, password                                    |                          |
| Login User           | POST   | /login         | email, password                                          |                          |
| Logout User          | POST   | /logout        |                                                          |                          |
| Profile User         | GET    | /profile       |                                                          |                          |
| List Crowdfundings   | GET    | /crowdfundings |                                                          |                          |
| Tambah Crowdfundings | POST   | /crowdfundings | title, category, pledged, target, date_end, profile_name | thumbnail, profile_photo |
