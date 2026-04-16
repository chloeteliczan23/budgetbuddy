const translations = {
    en: {
        navHome: "Home",
        navTools: "Budgeting Tools",
        navEducation: "Financial Education",
        navResources: "Resources",
        navContact: "Contact",

        homeHelping: "Helping Students Save Smarter",
        homeHeroSub: "Take control of your money with simple tools, clear guidance, and student‑friendly budgeting support.",
        homeStartBudget: "Start Your Budget",
        homeWelcome: "Welcome to BudgetBuddy",
        homeIntro: "BudgetBuddy helps college students take control of their money with simple tools, guides, and resources.",
        homeLearnMore: "Learn More",

        toolsTitle: "Budgeting Tools",
        toolsIntro: "Use these tools to plan your monthly spending and track your financial habits.",
        toolsBudgetBuilder: "Monthly Budget Builder",
        toolsBudgetBuilderDesc: "List your income and expenses to build a monthly budget.",
        toolsExpenseTracker: "Expense Tracker",
        toolsExpenseTrackerDesc: "Record your daily purchases to understand your spending habits.",
        toolsSavingsGoal: "Savings Goal Planner",
        toolsSavingsGoalDesc: "Set a savings goal and track your progress over time.",
        openTool: "Open Tool",

        eduTitle: "Financial Education",
        eduIntro: "Learn the essentials of managing money as a student.",
        eduBudgetBasics: "Budgeting Basics",
        eduBudgetBasicsDesc: "Understand the difference between needs and wants, and learn how to build a simple, effective budget.",
        eduBudgetBasicsLink: "Visit Here",   // UPDATED BUTTON TEXT

        eduCreditDebt: "Credit & Debt 101",
        eduCreditDebtDesc: "Learn how credit cards, interest, and debt work.",
        eduWatchPlaylist: "Watch Playlist",

        eduLoans: "Student Loans",
        eduLoansDesc: "Get familiar with loan types, repayment plans, and interest.",
        eduLoansLearnMore: "Learn More",     // ⭐ NEW BUTTON

        resourcesTitle: "Resources",
        resourcesIntro: "Explore tools and links that support your financial journey.",
        resourcesTemplates: "Downloadable Templates",
        resourcesTemplatesDesc: "Use simple spreadsheets and logs to track your budget and expenses.",
        monthlyBudgetTemplate: "Monthly Budget Template (Excel)",
        weeklyExpenseLog: "Weekly Expense Log (PDF)",
        campusAid: "Campus Financial Aid",
        campusAidDesc: "Visit your school’s financial aid office website for scholarships, grants, and loan information.",
        federalAid: "Federal Student Aid Resources",
        scholarshipSearch: "Scholarship Search",
        scholarshipSearchDesc: "Look for scholarships that match your background, major, or interests.",
        searchScholarships: "Search Scholarships",

        contactTitle: "Contact Us",
        contactIntro: "Have questions or need support? Send us a message and we’ll get back to you soon.",
        contactName: "Name",
        contactEmail: "Email",
        contactMessage: "Message",
        contactSend: "Send Message",

        footerText: "© 2026 BudgetBuddy. All rights reserved."
    },

    es: {
        navHome: "Inicio",
        navTools: "Herramientas",
        navEducation: "Educación Financiera",
        navResources: "Recursos",
        navContact: "Contacto",

        homeHelping: "Ayudando a los estudiantes a ahorrar mejor",
        homeHeroSub: "Toma control de tu dinero con herramientas simples, orientación clara y apoyo financiero para estudiantes.",
        homeStartBudget: "Comienza tu presupuesto",
        homeWelcome: "Bienvenido a BudgetBuddy",
        homeIntro: "BudgetBuddy ayuda a los estudiantes universitarios a tomar control de su dinero con herramientas simples, guías y recursos.",
        homeLearnMore: "Aprende más",

        toolsTitle: "Herramientas de Presupuesto",
        toolsIntro: "Usa estas herramientas para planificar tus gastos mensuales y seguir tus hábitos financieros.",
        toolsBudgetBuilder: "Constructor de Presupuesto Mensual",
        toolsBudgetBuilderDesc: "Enumera tus ingresos y gastos para crear un presupuesto mensual.",
        toolsExpenseTracker: "Registro de Gastos",
        toolsExpenseTrackerDesc: "Registra tus compras diarias para entender tus hábitos de gasto.",
        toolsSavingsGoal: "Planificador de Metas de Ahorro",
        toolsSavingsGoalDesc: "Establece una meta de ahorro y sigue tu progreso.",
        openTool: "Abrir herramienta",

        eduTitle: "Educación Financiera",
        eduIntro: "Aprende lo esencial sobre cómo manejar el dinero como estudiante.",
        eduBudgetBasics: "Conceptos Básicos de Presupuesto",
        eduBudgetBasicsDesc: "Comprende la diferencia entre necesidades y deseos, y aprende a crear un presupuesto simple y efectivo.",
        eduBudgetBasicsLink: "Visitar Aquí",   // UPDATED BUTTON TEXT

        eduCreditDebt: "Crédito y Deuda 101",
        eduCreditDebtDesc: "Aprende cómo funcionan las tarjetas de crédito, los intereses y las deudas.",
        eduWatchPlaylist: "Ver Lista de Reproducción",

        eduLoans: "Préstamos Estudiantiles",
        eduLoansDesc: "Familiarízate con los tipos de préstamos, planes de pago e intereses.",
        eduLoansLearnMore: "Aprende Más",     // ⭐ NEW BUTTON

        resourcesTitle: "Recursos",
        resourcesIntro: "Explora herramientas y enlaces que apoyan tu camino financiero.",
        resourcesTemplates: "Plantillas Descargables",
        resourcesTemplatesDesc: "Usa hojas de cálculo y registros simples para seguir tu presupuesto y gastos.",
        monthlyBudgetTemplate: "Plantilla de Presupuesto Mensual (Excel)",
        weeklyExpenseLog: "Registro de Gastos Semanal (PDF)",
        campusAid: "Ayuda Financiera del Campus",
        campusAidDesc: "Visita el sitio web de la oficina de ayuda financiera de tu escuela para becas, subvenciones e información de préstamos.",
        federalAid: "Recursos Federales de Ayuda Estudiantil",
        scholarshipSearch: "Búsqueda de Becas",
        scholarshipSearchDesc: "Busca becas que coincidan con tu origen, especialidad o intereses.",
        searchScholarships: "Buscar Becas",

        contactTitle: "Contáctanos",
        contactIntro: "¿Tienes preguntas o necesitas ayuda? Envíanos un mensaje y te responderemos pronto.",
        contactName: "Nombre",
        contactEmail: "Correo electrónico",
        contactMessage: "Mensaje",
        contactSend: "Enviar mensaje",

        footerText: "© 2026 BudgetBuddy. Todos los derechos reservados."
    }
};

// Apply language
function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = translations[lang][key];
    });
}