# PROJECT BUDGET: EVENT PLANNER SYSTEM
## Комплексный бюджет разработки и внедрения

---

## 1. SELECTION PROCESS (Процесс выбора решения)

### 1.1 Internal resources / staff costs (Внутренние ресурсы)

#### 1.1.1 Information Systems (IS) department
- **Анализ текущей инфраструктуры**: 80 часов × $50/час = **$4,000**
- **Оценка технических требований**: 40 часов × $50/час = **$2,000**
- **Анализ безопасности и соответствия**: 60 часов × $50/час = **$3,000**
- **Подготовка технической документации**: 30 часов × $50/час = **$1,500**
- **ИТОГО IS department**: **$10,500**

#### 1.1.2 User departments (Пользовательские отделы)
- **Интервью с менеджерами площадок**: 20 часов × $40/час = **$800**
- **Сбор требований от отдела продаж**: 30 часов × $40/час = **$1,200**
- **Анализ бизнес-процессов бронирования**: 40 часов × $40/час = **$1,600**
- **Тестирование прототипов**: 25 часов × $40/час = **$1,000**
- **ИТОГО User departments**: **$4,600**

#### 1.1.3 Procurement department (Отдел закупок)
- **Подготовка тендерной документации**: 30 часов × $45/час = **$1,350**
- **Анализ предложений поставщиков**: 20 часов × $45/час = **$900**
- **Переговоры с вендорами**: 15 часов × $45/час = **$675**
- **Юридическая проверка контрактов**: 10 часов × $45/час = **$450**
- **ИТОГО Procurement department**: **$3,375**

### 1.2 Travel and expenses (Командировки и расходы)
- **Посещение конференций Event Tech**: 2 поездки × $2,000 = **$4,000**
- **Встречи с потенциальными поставщиками**: 3 поездки × $1,500 = **$4,500**
- **Визиты к существующим клиентам систем**: 2 поездки × $1,200 = **$2,400**
- **ИТОГО Travel**: **$10,900**

### 1.3 Specification / RFP tools and programs (Инструменты спецификации)
- **Программное обеспечение для управления требованиями**: **$2,500**
- **Инструменты для создания wireframes (Figma Pro)**: **$800**
- **Инструменты для анализа бизнес-процессов (Lucidchart)**: **$600**
- **ИТОГО Tools**: **$3,900**

### 1.4 Consultancy assistance (Консультационная поддержка)
- **Бизнес-аналитик (внешний)**: 120 часов × $80/час = **$9,600**
- **Консультант по event management системам**: 80 часов × $100/час = **$8,000**
- **UX/UI консультант**: 60 часов × $75/час = **$4,500**
- **ИТОГО Consultancy**: **$22,100**

### 1.5 Legal assistance (Юридическая поддержка)
- **Проверка лицензионных соглашений**: **$3,000**
- **Консультации по GDPR и защите персональных данных**: **$2,500**
- **Подготовка SLA и контрактов**: **$2,000**
- **ИТОГО Legal**: **$7,500**

### **TOTAL SELECTION COSTS: $62,875**

---

## 2. IMPLEMENTATION PROCESS (Процесс внедрения)

---

## 2. SOFTWARE COSTS (Затраты на ПО)

### 2.1 Application software user licences
- **Flask Enterprise Support (если требуется)**: **$3,000/год**
- **SQLAlchemy Pro Tools**: **$1,200/год**
- **Backend API Gateway лицензии**: **$4,500/год**
- **ИТОГО для 50 одновременных пользователей**: **$8,700**

### 2.2 Software modifications (Модификации ПО)
- **Кастомизация системы бронирования**: **$15,000**
- **Интеграция платежных систем (Kaspi, Halyk)**: **$12,000**
- **Разработка системы приглашений с QR-кодами**: **$8,000**
- **Кастомная система отчетов и аналитики**: **$10,000**
- **Мобильная адаптация интерфейса**: **$7,000**
- **ИТОГО Modifications**: **$52,000**

### 2.3 Additional licences (Дополнительные лицензии)
- **IDE лицензии (PyCharm Professional)**: 5 × $200 = **$1,000**
- **Version control (GitHub Enterprise)**: **$2,500/год**
- **CI/CD tools (GitLab Premium)**: **$3,000/год**
- **API testing tools (Postman Enterprise)**: **$1,800/год**
- **ИТОГО Additional**: **$8,300**

### 2.4 Database user licences
- **PostgreSQL Professional Support**: **$5,000/год**
- **Database monitoring tools (pgAdmin Enterprise)**: **$2,000/год**
- **Database backup solution**: **$1,500/год**
- **ИТОГО Database**: **$8,500**

### 2.5 Operating system
- **Windows Server 2022 licenses**: 2 × $1,500 = **$3,000**
- **Linux Ubuntu Pro (для production)**: **$2,000/год**
- **ИТОГО OS**: **$5,000**

### 2.6 Additional security applications
- **SSL сертификаты (Extended Validation)**: **$1,200/год**
- **Web Application Firewall (WAF)**: **$3,500/год**
- **Антивирусная защита серверов**: **$800/год**
- **DDoS protection service**: **$4,000/год**
- **Penetration testing tools**: **$2,500/год**
- **ИТОГО Security**: **$12,000**

### **Sub total SOFTWARE: $94,500**

---

## 3. HARDWARE COSTS (Затраты на оборудование)

### 3.1 Servers (new or upgrades)
- **Production Server (Intel Xeon, 32GB RAM, 1TB SSD)**: **$5,000**
- **Development/Staging Server (16GB RAM, 500GB SSD)**: **$3,000**
- **Database Server (64GB RAM, 2TB SSD RAID)**: **$7,500**
- **ИТОГО Servers**: **$15,500**

### 3.2 PC's (new or upgrades)
- **Рабочие станции для разработчиков**: 5 × $1,800 = **$9,000**
- **Рабочие станции для тестировщиков**: 2 × $1,200 = **$2,400**
- **Рабочее место администратора**: **$2,000**
- **ИТОГО PCs**: **$13,400**

### 3.3 Additional memory
- **Расширение RAM для production сервера**: **$2,000**
- **Расширение RAM для DB сервера**: **$3,500**
- **ИТОГО Memory**: **$5,500**

### 3.4 Additional CPU
- **Upgrade CPU для production**: **$2,500**
- **ИТОГО CPU**: **$2,500**

### 3.5 Additional processing services (Облачные сервисы)
- **AWS/Azure Cloud Services (6 месяцев внедрения)**: **$18,000**
- **CDN Services (CloudFlare Business)**: **$3,600/год**
- **Email Service (SendGrid)**: **$1,200/год**
- **SMS Gateway (Twilio)**: **$2,400/год**
- **ngrok Pro (для разработки)**: **$500/год**
- **ИТОГО Cloud Services**: **$25,700**

### 3.6 Printers
- **Сетевой принтер для офиса проекта**: **$800**
- **ИТОГО Printers**: **$800**

### 3.7 Scanners
- **Сканер документов**: **$400**
- **ИТОГО Scanners**: **$400**

### 3.8 UPS (Источники бесперебойного питания)
- **UPS для production серверов**: 2 × $1,200 = **$2,400**
- **UPS для рабочих станций**: 3 × $300 = **$900**
- **ИТОГО UPS**: **$3,300**

### 3.9 Backup devices
- **NAS для резервного копирования (4TB)**: **$2,500**
- **External HDD для офлайн бэкапов**: 3 × $200 = **$600**
- **Облачный бэкап (AWS S3)**: **$1,800/год**
- **ИТОГО Backup**: **$4,900**

### 3.10 Disk storage
- **Дополнительные SSD диски**: 4 × $400 = **$1,600**
- **ИТОГО Storage**: **$1,600**

### **Sub total HARDWARE: $73,600**

---

## 4. NETWORK COSTS (Сетевая инфраструктура)

### 4.1 Cabling or wireless LAN
- **Установка структурированной кабельной системы**: **$3,500**
- **Wi-Fi точки доступа (Enterprise grade)**: 3 × $600 = **$1,800**
- **ИТОГО Cabling**: **$5,300**

### 4.2 Racks
- **Серверная стойка 42U**: **$2,000**
- **ИТОГО Racks**: **$2,000**

### 4.3 Routers
- **Enterprise роутер**: **$1,800**
- **Резервный роутер**: **$1,500**
- **ИТОГО Routers**: **$3,300**

### 4.4 Switching devices
- **Managed Switch 48-port**: **$2,500**
- **Managed Switch 24-port**: **$1,500**
- **ИТОГО Switches**: **$4,000**

### 4.5 Modems
- **Fiber optic модемы**: 2 × $400 = **$800**
- **ИТОГО Modems**: **$800**

### 4.6 Leased or dedicated lines
- **Выделенный канал 1 Gbps**: **$12,000/год**
- **Резервный канал 500 Mbps**: **$6,000/год**
- **ИТОГО Lines**: **$18,000**

### 4.7 Communications software
- **VPN software licenses**: **$2,000/год**
- **Network monitoring tools (SolarWinds)**: **$3,500/год**
- **ИТОГО Comm Software**: **$5,500**

### 4.8 Internet access
- **Офисный интернет (бизнес тариф)**: **$2,400/год**
- **ИТОГО Internet**: **$2,400**

### **Sub total NETWORK: $41,300**

---

## 5. LABOUR COSTS (Трудовые затраты)

### 5.1 PROJECT TEAM

#### 5.1.1 Project manager
- **Руководитель проекта**: 12 месяцев × $8,000/мес = **$96,000**
- **ИТОГО PM**: **$96,000**

#### 5.1.2 Project leader
- **Технический лидер**: 12 месяцев × $7,000/мес = **$84,000**
- **ИТОГО Leader**: **$84,000**

#### 5.1.3 Systems analysts
- **Senior системный аналитик**: 12 месяцев × $6,000/мес = **$72,000**
- **Junior системный аналитик**: 8 месяцев × $4,000/мес = **$32,000**
- **ИТОГО Analysts**: **$104,000**

#### 5.1.4 Programmers
- **Senior Backend Developer (Python/Flask)**: 12 месяцев × $7,500/мес = **$90,000**
- **Middle Backend Developer**: 12 месяцев × $5,500/мес = **$66,000**
- **Senior Frontend Developer**: 12 месяцев × $6,500/мес = **$78,000**
- **Middle Frontend Developer**: 10 месяцев × $4,500/мес = **$45,000**
- **Full-stack Developer**: 8 месяцев × $6,000/мес = **$48,000**
- **ИТОГО Programmers**: **$327,000**

#### 5.1.5 Systems testers
- **QA Lead**: 10 месяцев × $5,000/мес = **$50,000**
- **QA Engineer (Manual)**: 10 месяцев × $3,500/мес = **$35,000**
- **QA Automation Engineer**: 8 месяцев × $5,500/мес = **$44,000**
- **ИТОГО Testers**: **$129,000**

#### 5.1.6 Vendor consultants
- **Flask/Python консультант**: 40 дней × $1,200/день = **$48,000**
- **Database optimization консультант**: 20 дней × $1,500/день = **$30,000**
- **Security консультант**: 15 дней × $1,800/день = **$27,000**
- **Payment integration консультант**: 10 дней × $1,500/день = **$15,000**
- **ИТОГО Consultants**: **$120,000**

#### 5.1.7 Additional team resources
- **DevOps Engineer**: 10 месяцев × $6,000/мес = **$60,000**
- **Database Administrator**: 8 месяцев × $5,500/мес = **$44,000**
- **Technical Writer**: 6 месяцев × $4,000/мес = **$24,000**
- **Temporary contractors (пиковые нагрузки)**: **$30,000**
- **ИТОГО Additional**: **$158,000**

#### 5.1.8 Travel and expenses
- **Командировки команды разработки**: **$15,000**
- **Участие в конференциях**: **$8,000**
- **Обучающие поездки**: **$5,000**
- **ИТОГО Travel**: **$28,000**

### **Sub total PROJECT TEAM: $1,146,000**

---

### 5.2 USER TEAM

#### 5.2.1 User team leader
- **Бизнес-представитель от заказчика**: 12 месяцев × $5,000/мес = **$60,000**
- **ИТОГО Leader**: **$60,000**

#### 5.2.2 User team members
- **Представители от отдела бронирования**: 3 чел × 6 месяцев × $3,000/мес = **$54,000**
- **Представители от отдела продаж**: 2 чел × 6 месяцев × $3,500/мес = **$42,000**
- **Представители от клиентского сервиса**: 2 чел × 4 месяца × $3,000/мес = **$24,000**
- **ИТОГО Members**: **$120,000**

#### 5.2.3 User team managers
- **Менеджер по внедрению со стороны бизнеса**: 10 месяцев × $6,000/мес = **$60,000**
- **ИТОГО Managers**: **$60,000**

### **Sub total USER TEAM: $240,000**

---

### 5.3 SUPPORT COSTS

#### 5.3.1 Client manager
- **Клиентский менеджер**: 12 месяцев × $5,500/мес = **$66,000**
- **ИТОГО Client Manager**: **$66,000**

#### 5.3.2 IS support
- **IT Support специалисты**: 2 чел × 12 месяцев × $4,000/мес = **$96,000**
- **ИТОГО IS Support**: **$96,000**

#### 5.3.3 DB analyst
- **Database analyst**: 10 месяцев × $5,500/мес = **$55,000**
- **ИТОГО DB Analyst**: **$55,000**

#### 5.3.4 Networking support
- **Network engineer**: 8 месяцев × $5,000/мес = **$40,000**
- **ИТОГО Network Support**: **$40,000**

### **Sub total SUPPORT: $257,000**

---

### 5.4 PROJECT TEAM AND OFFICE COSTS

#### 5.4.1 Temporary office accommodation
- **Аренда офисного помещения**: 12 месяцев × $3,000/мес = **$36,000**
- **Коммунальные услуги**: 12 месяцев × $500/мес = **$6,000**
- **ИТОГО Office**: **$42,000**

#### 5.4.2 Furniture, stationery and supplies
- **Офисная мебель (столы, кресла)**: **$8,000**
- **Канцелярские принадлежности**: **$2,000**
- **Расходные материалы**: **$1,500**
- **ИТОГО Furniture**: **$11,500**

#### 5.4.3 Additional phones, contracts or lines
- **Корпоративные мобильные телефоны**: 10 × $400 = **$4,000**
- **Мобильная связь**: 12 месяцев × $600/мес = **$7,200**
- **ИТОГО Phones**: **$11,200**

#### 5.4.4 Project tools
- **Project management software (Jira, Confluence)**: **$5,000/год**
- **Testing tools licenses**: **$4,000**
- **Collaboration tools (Slack, Zoom)**: **$2,400/год**
- **Design tools (Adobe Creative Cloud)**: **$3,000/год**
- **ИТОГО Tools**: **$14,400**

#### 5.4.5 Project website set up and maintenance
- **Разработка project portal**: **$5,000**
- **Хостинг и поддержка**: **$1,200/год**
- **ИТОГО Website**: **$6,200**

#### 5.4.6 Administrative support
- **Административный ассистент**: 12 месяцев × $3,000/мес = **$36,000**
- **ИТОГО Admin**: **$36,000**

#### 5.4.7 Communications costs
- **Интернет и связь для команды**: **$3,600/год**
- **Почтовые услуги**: **$800**
- **ИТОГО Communications**: **$4,400**

#### 5.4.8 Video conferencing
- **Видеоконференц-оборудование**: **$4,500**
- **Zoom Business лицензии**: **$2,000/год**
- **ИТОГО Video**: **$6,500**

#### 5.4.9 Printing
- **Печать документации**: **$3,000**
- **Печать user manuals**: **$2,500**
- **ИТОГО Printing**: **$5,500**

#### 5.4.10 Project information / marketing
- **Маркетинговые материалы**: **$4,000**
- **Презентационные материалы**: **$2,000**
- **Брендинг проекта**: **$3,500**
- **ИТОГО Marketing**: **$9,500**

#### 5.4.11 Project team recognition / awards
- **Бонусы за ключевые вехи**: **$25,000**
- **Team building мероприятия**: **$8,000**
- **Recognition awards**: **$5,000**
- **ИТОГО Awards**: **$38,000**

### **Sub total PROJECT OFFICE: $185,200**

---

## 6. TRAINING (Обучение)

### 6.1 Technical training for implementation team
- **Python/Flask продвинутое обучение**: 5 чел × $2,000 = **$10,000**
- **DevOps и CI/CD практикум**: 3 чел × $2,500 = **$7,500**
- **Security best practices**: 4 чел × $1,800 = **$7,200**
- **ИТОГО Technical**: **$24,700**

### 6.2 Training key users
- **Обучение администраторов системы**: 5 чел × 5 дней × $500/день = **$12,500**
- **Обучение супер-пользователей**: 10 чел × 3 дня × $400/день = **$12,000**
- **ИТОГО Key Users**: **$24,500**

### 6.3 Temporary internal training facilities
- **Аренда учебного класса**: 20 дней × $300/день = **$6,000**
- **Оборудование учебного класса**: **$5,000**
- **ИТОГО Facilities**: **$11,000**

### 6.4 Training remainder of users
- **Обучение конечных пользователей**: 50 чел × 2 дня × $300/день = **$30,000**
- **Online training platform**: **$5,000**
- **ИТОГО End Users**: **$35,000**

### 6.5 Training materials
- **Разработка обучающих материалов**: **$8,000**
- **Видео-уроки production**: **$6,000**
- **Печатные руководства**: **$3,000**
- **ИТОГО Materials**: **$17,000**

### 6.6 Travel and expenses to attend training
- **Командировки на обучение**: **$12,000**
- **Проживание и питание**: **$8,000**
- **ИТОГО Training Travel**: **$20,000**

### **Sub total TRAINING: $132,200**

---

## 7. DATA COSTS (Затраты на данные)

### 7.1 Data clean up / de-duplication
- **Аудит существующих данных**: **$8,000**
- **Очистка дублей в базе площадок**: **$12,000**
- **Нормализация данных пользователей**: **$10,000**
- **Валидация контактной информации**: **$6,000**
- **ИТОГО Clean-up**: **$36,000**

### 7.2 Data archiving
- **Архивирование legacy данных**: **$5,000**
- **Организация архивного хранилища**: **$3,000**
- **ИТОГО Archiving**: **$8,000**

### **Sub total DATA: $44,000**

---

## 8. OTHER COSTS (Прочие затраты)

### 8.1 Quality assurance
- **Внешний QA аудит**: **$15,000**
- **Performance testing сервисы**: **$8,000**
- **Load testing tools**: **$5,000**
- **ИТОГО QA**: **$28,000**

### 8.2 Internal audit review(s)
- **Аудит безопасности**: **$12,000**
- **Compliance audit (PCI DSS)**: **$10,000**
- **Process audit**: **$6,000**
- **ИТОГО Audit**: **$28,000**

### 8.3 Project steering group
- **Заседания steering committee**: 12 × $2,000 = **$24,000**
- **ИТОГО Steering**: **$24,000**

### 8.4 Decommissioning of legacy systems
- **Миграция данных со старых систем**: **$18,000**
- **Вывод из эксплуатации legacy**: **$8,000**
- **ИТОГО Decommissioning**: **$26,000**

### 8.5 Liaising with other organisations
- **Визиты к партнерским организациям**: **$8,000**
- **Обмен опытом с аналогичными проектами**: **$5,000**
- **ИТОГО Liaising**: **$13,000**

### 8.6 Attending conferences
- **Билеты на конференции**: **$6,000**
- **Участие в user groups**: **$3,000**
- **Командировки на мероприятия**: **$8,000**
- **ИТОГО Conferences**: **$17,000**

### **Sub total OTHER: $136,000**

---

## 9. OVERHEADS (Накладные расходы)

### 9.1 Additional utilities
- **Дополнительное электричество для серверов**: **$6,000/год**
- **Кондиционирование серверной**: **$4,000/год**
- **ИТОГО Utilities**: **$10,000**

### 9.2 Other allocated business costs
- **Страхование проекта**: **$8,000**
- **Накладные расходы компании (15%)**: **$150,000**
- **ИТОГО Other**: **$158,000**

### **Sub total OVERHEADS: $168,000**

---

## 10. CONTINGENCY (Резерв на непредвиденные расходы)

### 10.1 Estimated 10% of total implementation costs
- **10% от суммы всех затрат на внедрение**: **$234,880**

### **TOTAL CONTINGENCY: $234,880**

---

## **TOTAL IMPLEMENTATION COSTS: $2,583,680**

---

## 11. ONGOING COSTS (Текущие расходы после запуска)

### 11.1 Annual vendor maintenance / service charges

#### 11.1.1 Software maintenance
- **Flask и библиотеки support**: **$5,000/год**
- **Third-party API subscriptions**: **$8,000/год**
- **Software licenses renewal**: **$15,000/год**
- **ИТОГО Software**: **$28,000/год**

#### 11.1.2 Hardware maintenance
- **Серверное оборудование support**: **$8,000/год**
- **Network equipment support**: **$4,000/год**
- **Замена компонентов (амортизация)**: **$6,000/год**
- **ИТОГО Hardware**: **$18,000/год**

#### 11.1.3 Database maintenance
- **PostgreSQL support**: **$5,000/год**
- **Database optimization services**: **$4,000/год**
- **ИТОГО Database**: **$9,000/год**

### 11.2 Internal IS support
- **Support team (3 человека)**: 3 × $60,000/год = **$180,000/год**
- **On-call дежурства**: **$24,000/год**
- **ИТОГО IS Support**: **$204,000/год**

### 11.3 Disaster recovery
- **Облачный DR site**: **$12,000/год**
- **Backup services**: **$6,000/год**
- **DR testing (quarterly)**: **$8,000/год**
- **ИТОГО DR**: **$26,000/год**

### **TOTAL ONGOING COSTS: $285,000/год**

---

## PROJECT COST CALCULATIONS (Итоговые расчеты)

### SUMMARY BY PHASES

| Phase | Cost |
|-------|------|
| **1. Selection Process** | **$62,875** |
| **2. Implementation Costs** | **$2,583,680** |
| **Total Project Cost (One-time)** | **$2,646,555** |
| **Ongoing Annual Costs** | **$285,000/год** |

---

### IMPLEMENTATION BREAKDOWN

| Category | Amount | % of Total |
|----------|--------|-----------|
| Software | $94,500 | 3.7% |
| Hardware | $73,600 | 2.9% |
| Network | $41,300 | 1.6% |
| Labour - Project Team | $1,146,000 | 44.4% |
| Labour - User Team | $240,000 | 9.3% |
| Labour - Support | $257,000 | 9.9% |
| Project Office | $185,200 | 7.2% |
| Training | $132,200 | 5.1% |
| Data | $44,000 | 1.7% |
| Other | $136,000 | 5.3% |
| Overheads | $168,000 | 6.5% |
| Contingency | $234,880 | 9.1% |
| **TOTAL** | **$2,583,680** | **100%** |

---

### PER USER CALCULATIONS

Assuming **500 registered users** and **100 concurrent users**:

| Metric | Calculation | Result |
|--------|-------------|--------|
| **Total Project Cost** | | **$2,646,555** |
| **Number of Users (licenses)** | | **100 concurrent** |
| **Cost per Concurrent User** | $2,646,555 ÷ 100 | **$26,466** |
| **Cost per Registered User** | $2,646,555 ÷ 500 | **$5,293** |

---

### 5-YEAR TOTAL COST OF OWNERSHIP (TCO)

| Year | One-time Costs | Annual Ongoing | Year Total | Cumulative |
|------|----------------|----------------|------------|------------|
| Year 0 (Implementation) | $2,646,555 | $0 | $2,646,555 | $2,646,555 |
| Year 1 | $0 | $285,000 | $285,000 | $2,931,555 |
| Year 2 | $0 | $299,250 (+5%) | $299,250 | $3,230,805 |
| Year 3 | $0 | $314,213 (+5%) | $314,213 | $3,545,018 |
| Year 4 | $0 | $329,923 (+5%) | $329,923 | $3,874,941 |
| Year 5 | $0 | $346,419 (+5%) | $346,419 | $4,221,360 |

**5-Year TCO: $4,221,360**

---

### BUDGET RISKS AND MITIGATION

#### HIGH RISK ITEMS (вероятность перерасхода >20%)

1. **Labour Costs - Project Team ($1,146,000)**
   - Риск: Задержки в разработке, уход ключевых сотрудников
   - Митигация: 10% contingency заложен

2. **Software Modifications ($52,000)**
   - Риск: Недооценка сложности интеграций
   - Митигация: Поэтапная разработка, early prototyping

3. **Cloud Services ($25,700)**
   - Риск: Перерасход при высоких нагрузках
   - Митигация: Мониторинг использования, оптимизация

#### MEDIUM RISK ITEMS (вероятность перерасхода 10-20%)

1. **Training ($132,200)**
   - Риск: Дополнительные сессии для медленно обучающихся
   - Митигация: Phased rollout, train-the-trainer

2. **Data Migration ($44,000)**
   - Риск: Качество legacy данных хуже ожидаемого
   - Митигация: Early data assessment

---

### PAYMENT SCHEDULE (Рекомендуемый график платежей)

| Milestone | % Complete | Payment | Cumulative |
|-----------|------------|---------|------------|
| Contract signature | 0% | $264,656 (10%) | $264,656 |
| Requirements approved | 15% | $396,983 (15%) | $661,639 |
| Design complete | 30% | $529,311 (20%) | $1,190,950 |
| Development 50% | 50% | $529,311 (20%) | $1,720,261 |
| Testing complete | 75% | $396,983 (15%) | $2,117,244 |
| Go-live | 90% | $264,656 (10%) | $2,381,900 |
| Post-launch (30 days) | 100% | $264,655 (10%) | $2,646,555 |

---

### COST OPTIMIZATION OPPORTUNITIES

1. **Cloud vs On-Premise**
   - Возможность снижения hardware costs на 40% ($29,440)
   - При переходе полностью на облако (AWS/Azure)

2. **Offshore Development**
   - Потенциальная экономия 30% на labour ($343,800)
   - При использовании offshore команды для non-critical tasks

3. **Open Source Tools**
   - Экономия до $15,000 на лицензиях
   - При максимальном использовании open-source аналогов

**TOTAL POTENTIAL SAVINGS: До $388,240 (14.7%)**

---

### BUDGET APPROVAL MATRIX

| Decision Level | Amount Range | Approver |
|---------------|--------------|----------|
| Minor changes | < $5,000 | Project Manager |
| Moderate changes | $5,000 - $25,000 | Steering Committee |
| Major changes | $25,000 - $100,000 | Executive Sponsor |
| Critical changes | > $100,000 | Board of Directors |

---

## NOTES AND ASSUMPTIONS

1. **Currency**: All amounts in USD
2. **Timeline**: 12-month implementation period
3. **Team Location**: Mixed (on-site and remote)
4. **Inflation**: 5% annual increase for ongoing costs
5. **User Count**: Based on 500 registered, 100 concurrent users
6. **Working Hours**: 160 hours/month standard
7. **Contingency**: 10% applied to total implementation
8. **Tax**: Exclusive of VAT/local taxes (add 12% for Kazakhstan)

---

## BUDGET OWNERS

| Budget Category | Primary Owner | Secondary Owner |
|----------------|---------------|-----------------|
| Software & Hardware | CTO | IT Manager |
| Labour - Dev Team | Development Manager | PM |
| Labour - Business Team | Business Sponsor | BA Lead |
| Training | HR Manager | PM |
| Infrastructure | IT Operations | Network Admin |
| Ongoing Support | Support Manager | CTO |

---

**Document Version**: 1.0  
**Date**: November 4, 2025  
**Prepared by**: Project Budget Office  
**Status**: Draft for Review  

---

*This budget is subject to approval by the Project Steering Committee and may be updated based on detailed requirements analysis and vendor quotes.*





