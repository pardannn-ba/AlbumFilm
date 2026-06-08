# Product Requirements Document (PRD)
## Movie Discovery Application

**Version:** 1.0  
**Date:** 2026-06-05  
**Project Name:** Tugas Akhir 2026 - Movie Discovery Application  

---

## 1. Executive Summary

Movie Discovery Application adalah aplikasi web yang memungkinkan pengguna untuk menemukan, mencari, dan menyimpan film favorit mereka. Aplikasi ini mengintegrasikan dengan The Movie Database (TMDB) API untuk menyediakan data film yang lengkap dan terkini. Pengguna dapat menjelajahi film populer, mencari film berdasarkan judul, memfilter berdasarkan genre, dan menyimpan film favorit mereka.

---

## 2. Product Overview

### 2.1 Vision
Memberikan pengalaman pengguna yang intuitif dan responsif untuk menemukan film sesuai preferensi, dengan antarmuka yang modern dan mudah digunakan.

### 2.2 Target Users
- Film enthusiasts (penggemar film)
- Casual movie watchers (pemirsa film casual)
- Pengguna yang mencari rekomendasi film

### 2.3 Key Features
- Browse film populer
- Search film berdasarkan judul
- Filter film berdasarkan genre
- Lihat detail lengkap film
- Simpan film favorit
- Kelola daftar film favorit

---

## 3. Detailed Features

### 3.1 Home Page (Halaman Utama)
**Purpose:** Menampilkan film-film terpopuler dan menyediakan akses ke berbagai fitur pencarian

**Features:**
- Menampilkan daftar film populer dalam grid layout
- Search bar untuk mencari film berdasarkan judul
- Genre filter dropdown untuk memfilter film berdasarkan kategori
- Loading spinner saat data sedang dimuat
- Error message jika terjadi kesalahan loading
- Tombol "Add to Favorites" di setiap kartu film
- Pagination atau infinite scroll untuk navigasi film (opsional)

**User Stories:**
- Sebagai pengguna, saya ingin melihat film-film populer saat membuka aplikasi
- Sebagai pengguna, saya ingin mencari film dengan memasukkan judul di search bar
- Sebagai pengguna, saya ingin memfilter film berdasarkan genre
- Sebagai pengguna, saya ingin menambahkan film ke daftar favorit

### 3.2 Detail Page (Halaman Detail Film)
**Purpose:** Menampilkan informasi lengkap tentang film yang dipilih

**Features:**
- Backdrop image film
- Poster film
- Judul film
- Rating/rating film
- Sinopsis/overview
- Release date
- Genre film
- Tombol "Add to Favorites" / "Remove from Favorites"
- Tombol kembali ke halaman sebelumnya
- Status favorit yang jelas

**User Stories:**
- Sebagai pengguna, saya ingin melihat detail lengkap film ketika saya klik kartu film
- Sebagai pengguan, saya ingin menambahkan atau menghapus film dari favorit di halaman detail
- Sebagai pengguna, saya ingin kembali ke halaman sebelumnya

### 3.3 Favorites Page (Halaman Favorit)
**Purpose:** Menampilkan daftar semua film yang telah disimpan pengguna

**Features:**
- Daftar film favorit dalam grid layout
- Tampilkan pesan jika tidak ada film favorit
- Tombol "Remove from Favorites" untuk setiap film
- Link ke halaman detail film
- Persisten storage menggunakan localStorage atau database

**User Stories:**
- Sebagai pengguna, saya ingin melihat semua film yang telah saya tandai sebagai favorit
- Sebagai pengguna, saya ingin menghapus film dari daftar favorit
- Sebagai pengguna, saya ingin menyimpan daftar favorit saya bahkan setelah refresh halaman

### 3.4 Navigation Bar (Navbar)
**Purpose:** Menyediakan navigasi utama aplikasi

**Features:**
- Logo/brand name aplikasi
- Links ke Home, Favorites
- Responsive design untuk mobile dan desktop
- Active link indicator
- Mobile menu (hamburger) untuk responsive

### 3.5 Search Bar
**Purpose:** Memfasilitasi pencarian film berdasarkan judul

**Features:**
- Input field dengan placeholder
- Real-time search results
- Clear button untuk reset pencarian
- Loading state selama pencarian

### 3.6 Genre Filter
**Purpose:** Memungkinkan pengguna memfilter film berdasarkan kategori

**Features:**
- Dropdown dengan daftar genre
- "All Genres" option sebagai default
- Real-time filter hasil

### 3.7 Movie Card Component
**Purpose:** Menampilkan informasi ringkas film

**Features:**
- Poster image
- Judul film
- Rating
- Tombol "Add to Favorites" / "Remove from Favorites"
- Hover effect untuk UX yang lebih baik
- Responsive pada berbagai ukuran layar

### 3.8 Loading & Error States
**Purpose:** Memberikan feedback yang jelas kepada pengguna

**Features:**
- Loading spinner component
- Error message component dengan deskripsi error
- Retry button pada saat error (opsional)

---

## 4. Technical Specifications

### 4.1 Technology Stack
- **Frontend Framework:** React 19.2.6
- **Build Tool:** Vite 8.0.12
- **Routing:** React Router DOM 7.17.0
- **Styling:** Tailwind CSS 4.3.0
- **API:** The Movie Database (TMDB) API
- **Language:** JavaScript ES6+

### 4.2 API Integration
- **Provider:** The Movie Database (TMDB)
- **Endpoints:**
  - GET `/movie/popular` - Ambil daftar film populer
  - GET `/search/movie` - Cari film berdasarkan query
  - GET `/movie/{id}` - Ambil detail film
  - GET `/genre/movie/list` - Ambil daftar genre
  - GET `/discover/movie` - Discover film dengan filter

### 4.3 Data Storage
- **Client-side Storage:** localStorage untuk menyimpan daftar favorit
- **Session Management:** React state untuk state manajemen

### 4.4 Architecture
```
src/
├── components/
│   ├── MovieCard.jsx        # Komponen kartu film
│   ├── SearchBar.jsx         # Komponen search
│   ├── GenreFilter.jsx       # Komponen filter genre
│   ├── Navbar.jsx            # Komponen navigasi
│   ├── LoadingSpinner.jsx    # Komponen loading state
│   └── ErrorMessage.jsx      # Komponen error state
├── pages/
│   ├── Home.jsx              # Halaman utama
│   ├── Detail.jsx            # Halaman detail film
│   └── Favorite.jsx          # Halaman favorit
├── router/
│   └── index.jsx             # Konfigurasi routing
├── utils/
│   ├── movieApi.js           # API integration
│   └── useFetch.js           # Custom hook untuk fetch
├── App.jsx                   # Komponen utama
├── main.jsx                  # Entry point
└── App.css, index.css        # Global styling
```

---

## 5. User Experience & Design

### 5.1 Design Principles
- **Simplicity:** Interface yang bersih dan tidak membingungkan
- **Responsiveness:** Optimal tampilan di desktop, tablet, dan mobile
- **Accessibility:** Mudah digunakan oleh semua pengguna
- **Performance:** Loading time yang cepat

### 5.2 Color Scheme
- **Primary Color:** Sesuai dengan Tailwind CSS default
- **Background:** Light atau dark mode (bergantung desain)
- **Accent Colors:** Untuk buttons dan interactive elements

### 5.3 Typography
- **Font:** Tailwind CSS default font stack
- **Sizing:** Responsive font sizes

### 5.4 Layout
- **Grid System:** Tailwind CSS grid untuk responsive layout
- **Breakpoints:** Mobile-first approach dengan breakpoints untuk tablet dan desktop

---

## 6. Functional Requirements

### 6.1 FR1: Browse Popular Movies
- Aplikasi harus menampilkan minimal 20 film populer saat pertama kali dibuka
- Film ditampilkan dalam grid layout
- Setiap kartu film menampilkan poster, judul, rating, dan tombol favorit

### 6.2 FR2: Search Functionality
- User dapat memasukkan query di search bar
- Aplikasi menampilkan hasil pencarian dalam real-time
- Search case-insensitive
- Jika tidak ada hasil, tampilkan pesan yang sesuai

### 6.3 FR3: Genre Filtering
- User dapat memilih genre dari dropdown
- Aplikasi menampilkan film-film sesuai genre yang dipilih
- Option "All Genres" untuk menghapus filter

### 6.4 FR4: Movie Details
- User dapat klik film untuk melihat detail lengkap
- Detail mencakup: poster, backdrop, judul, rating, sinopsis, release date, genre
- User dapat menambah/menghapus dari favorit di halaman detail

### 6.5 FR5: Favorites Management
- User dapat menambahkan film ke favorit dengan tombol di kartu atau detail page
- User dapat melihat semua favorit di dedicated page
- User dapat menghapus film dari favorit
- Daftar favorit tersimpan di localStorage
- Daftar favorit tetap ada setelah page refresh

### 6.6 FR6: Navigation
- Navbar menampilkan Home dan Favorites links
- User dapat berpindah antar page dengan mudah
- Active link indikator menunjukkan halaman yang sedang dilihat

### 6.7 FR7: Error Handling
- Aplikasi menampilkan error message yang informatif jika API call gagal
- User dapat melihat loading state saat data sedang diambil

---

## 7. Non-Functional Requirements

### 7.1 Performance
- Page load time < 3 detik
- API response < 2 detik
- Smooth scrolling dan transitions

### 7.2 Compatibility
- Support untuk modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design untuk devices dengan ukuran layar 320px - 1920px

### 7.3 Scalability
- Aplikasi dapat menangani ribuan film dari TMDB API
- Efficient state management untuk performa optimal

### 7.4 Security
- Secure API key management (gunakan environment variables)
- Input validation untuk search query
- No sensitive data stored di client-side

### 7.5 Accessibility
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Alt text untuk images
- Proper semantic HTML

---

## 8. User Flows

### 8.1 Browse & Search Flow
1. User membuka aplikasi → Home page
2. Melihat daftar film populer
3. User dapat:
   - Scroll untuk melihat lebih banyak film
   - Input keyword di search bar
   - Memilih genre dari filter
4. Hasil ditampilkan sesuai pencarian/filter
5. User dapat klik film untuk detail

### 8.2 Favorites Flow
1. User klik "Add to Favorites" pada kartu film atau detail page
2. Film ditambahkan ke localStorage
3. Tombol berubah menjadi "Remove from Favorites"
4. User dapat akses favorites page dari navbar
5. Melihat daftar semua favorit
6. Dapat menghapus dari favorit atau klik untuk detail

### 8.3 Detail Page Flow
1. User klik film dari home atau favorites page
2. Aplikasi navigate ke `/detail/:id`
3. Halaman menampilkan informasi lengkap film
4. User dapat:
   - Menambah/menghapus dari favorit
   - Kembali ke halaman sebelumnya
   - Scroll untuk melihat semua informasi

---

## 9. Success Metrics & KPIs

- **Page Load Time:** < 3 detik
- **API Response Time:** < 2 detik
- **User Retention:** Film favorit tersimpan dengan baik
- **Search Accuracy:** Hasil pencarian relevan dengan query
- **Error Rate:** < 1% gagal loading data
- **Browser Compatibility:** 100% functional di modern browsers

---

## 10. Future Enhancements (Nice-to-Have)

- User authentication dan personalized recommendations
- Social features (share, rating, reviews)
- Watch list (planning to watch)
- Movie recommendations based on favorites
- Dark mode toggle
- Multiple language support (i18n)
- Movie trailers/videos
- Cast dan crew information
- User-generated reviews
- Pagination for better performance
- Advanced filtering options
- Movie rating history
- Offline mode dengan service workers

---

## 11. Constraints & Assumptions

### 11.1 Constraints
- Tergantung pada availability dan rate limits TMDB API
- Limited oleh free tier TMDB API (jika menggunakan)
- Client-side only storage (no backend)
- No authentication system

### 11.2 Assumptions
- User memiliki koneksi internet yang stabil
- User menggunakan modern browser
- TMDB API akan selalu tersedia
- localStorage tersedia di browser user

---

## 12. Testing Strategy

### 12.1 Unit Testing
- Test individual components
- Test utility functions
- Test API calls

### 12.2 Integration Testing
- Test component interactions
- Test page flows
- Test state management

### 12.3 E2E Testing
- Test complete user journeys
- Test all major features

### 12.4 Manual Testing
- Cross-browser testing
- Responsive design testing
- Performance testing
- Error handling testing

---

## 13. Deployment

- **Host:** Vercel, Netlify, atau GitHub Pages
- **Build Process:** `npm run build`
- **Environment Variables:** VITE_TMDB_KEY harus dikonfigurasi
- **CI/CD:** Optional (GitHub Actions)

---

## 14. Project Timeline (Estimated)

| Phase | Duration | Tasks |
|-------|----------|-------|
| Planning & Setup | 1 minggu | Understand requirements, setup project |
| Development - Phase 1 | 2 minggu | Home page, search, genre filter |
| Development - Phase 2 | 1.5 minggu | Detail page, favorites functionality |
| Testing | 1 minggu | Unit, integration, E2E testing |
| Deployment | 3 hari | Setup hosting, deploy to production |
| **Total** | **~6 minggu** | |

---

## 15. Approval & Sign-off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Product Manager | - | - | - |
| Developer | - | - | - |
| Stakeholder | - | - | - |

---

## 16. Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-05 | Team | Initial PRD creation |

---

## Appendix A: TMDB API Reference

### Popular Movies Endpoint
```
GET /movie/popular?api_key={KEY}&language=en-US
```

### Search Movies Endpoint
```
GET /search/movie?api_key={KEY}&query={query}&language=en-US
```

### Movie Details Endpoint
```
GET /movie/{id}?api_key={KEY}&language=en-US
```

### Genres Endpoint
```
GET /genre/movie/list?api_key={KEY}&language=en-US
```

### Discover by Genre Endpoint
```
GET /discover/movie?api_key={KEY}&with_genres={genreId}&language=en-US
```

---

## Appendix B: Project File Structure

```
Tugas Akhir 2026/
├── src/
│   ├── components/
│   │   ├── ErrorMessage.jsx
│   │   ├── GenreFilter.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   ├── pages/
│   │   ├── Detail.jsx
│   │   ├── Favorite.jsx
│   │   └── Home.jsx
│   ├── router/
│   │   └── index.jsx
│   ├── utils/
│   │   ├── movieApi.js
│   │   └── useFetch.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── public/
├── package.json
├── vite.config.js
├── eslint.config.js
├── index.html
├── README.md
└── PRD.md (this file)
```

---

**End of Document**
