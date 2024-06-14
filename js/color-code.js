document.addEventListener("DOMContentLoaded", function() {
    const elements = [
        "Tutoriel", "Tests", "JavaScript", "Composants Web", 
        "Developpement Web", "Lit", "Stencil", "Java", "Java 14", "Java 19", "Java 20", "Java 21", "Java 22", "JavaFX", "Quarkus",
        "Administration", "Alea", "Algorithme", "Angular", "Angular16", "Angular17", "Application WEB", 
        "Architecture Hexagonale", "Banking", "Bayes", "Beans", "BehavioralScience", "BiaisCognitif", 
        "Blockchain", "CDI", "Cerveau", "Chatbot", "Collections", "Communication", "Concurrence structurée", 
        "Craftsmanship", "Cybercrime", "Cybersecurite", "Cybersecurity", "DecisionMarketing", "Discriminations", 
        "Domain Driven Design", "EJB", "Economie", "Education", "Ethique", "Extension", "FFM", "Finance", 
        "Garbage collector", "Heuristique", "Hooks", "HumanFactor", "Hydratation", "Hydratation par défaut", 
        "IA", "IHM", "IllusionDesSeries", "IntelligenceCollective", "Interfaces", "JDK", "JDKMon", 
        "Jakarta EE", "Jakarta MVC", "Jakarta RESTful Web Service", "LRA", "Machine learning", "MachineLearning", "MicroProfile", 
        "Mindset", "Misc", "Mistral IA", "Neuroscience", "NewletterSCC", "Nudge", "Outillage", 
        "Pattern matching", "PgVector", "Philosophie", "Police", "Prediction", "Projet Amber", "Projet Loom", 
        "Projet Panama", "Psychologie", , "RAG", "Racisme", "Raison", "ResearchReports", "Reseaux", 
        "RessourcesHumaines", "RiskManagement", "Router", "Rxjs", "Réseau neuronal artificiel", "SAGA", 
        "SCC", "SPI", "SagesseDesFoules", "Science", "SciencesCognitives", "SciencesComportementales", 
        "Securite", "Signal", "Sludge", "Sous-RFC", "Spring AI", "Spring Boot", "Startup", "Switch expressions", 
        "Threads virtuels", "UI", "Violence", "WebRTC", "ZGC", "ai", "control Flow", "genAI", 
        "lazy loading blocs", "le signal Input()", "misc", "openai", "spring boot", 
    ];

    // Number of color hues available is 360
    // Creating an array of hues that are evenly distributed.
    const hues = elements.map((_, i) => i * (360 / elements.length));
    const elementColorAssigning = {};
        elements.forEach((element, i) => {
            elementColorAssigning[element] = hues[i];
    });

    // function to convert hue to HSL colro string
    function hueToHSL(hue, saturation, lightness, saturationAdjust = 0, lightnessAdjust = 0) {
        return `hsl(${hue}, ${saturation + saturationAdjust}%, ${lightness + lightnessAdjust}%)`;
    }

    // // Create a color set for each element with three shades
    const colorSet = {};
    Object.keys(elementColorAssigning).forEach(element => {
        const hue = elementColorAssigning[element];
        colorSet[element] = {
            background: hueToHSL(hue, 100, 95), // light shade for background
            border: hueToHSL(hue, 90, 60, 0, -5), // medium shade for border
            text: hueToHSL(hue, 80, 35, 0, -5) // dark shade for text
        };
    });

    // Create a <style> element to hold the dynamic CSS classes
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    const styleSheet = styleElement.sheet;

    function sanitizeClassName(className) {
        return className.toLowerCase().replace(/[\s+()]/g, '-').replace(/[^a-z0-9-_]/g, '');
    }

    // Generate the CSS classes and add them to the style element
    for (const element of Object.keys(colorSet)) {
        const className = sanitizeClassName(element);
        const colors = colorSet[element];
        styleSheet.insertRule(`.bg-${className}-100 { background-color: ${colors.background} !important; }`, styleSheet.cssRules.length);
        styleSheet.insertRule(`.border-${className}-200 { border-color: ${colors.border} !important; }`, styleSheet.cssRules.length);
        styleSheet.insertRule(`.text-${className}-500 { color: ${colors.text} !important; }`, styleSheet.cssRules.length);
    }

    const tags = document.querySelectorAll('[data-tag-name]');
    tags.forEach(tag => {
        const tagName = tag.getAttribute('data-tag-name');
        const className = sanitizeClassName(tagName);
        tag.classList.add(`text-${className}-500`);
        tag.classList.add(`bg-${className}-100`);
        tag.classList.add(`border-${className}-200`);

        const h1 = document.querySelector('h1.text-6xl');
        if (h1 && h1.textContent.includes(tagName)) {
            h1.classList.add(`text-${className}-500`);
        }
    });

    const articlesContainer = document.getElementById('articles-container');
    if (articlesContainer) {
            articlesContainer.classList.add(`border-${className}-200`);
    }
});