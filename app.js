        // Load brand rules from the actual nomenclature documents
        const brandRules = {
            signia: {
                platforms: [
                    { name: 'Signia Integrated Xperience', correct: 'Signia Integrated Xperience™' },
                    { name: 'Signia Augmented Xperience', correct: 'Signia Augmented Xperience' },
                    { name: 'Signia Xperience', correct: 'Signia Xperience' },
                    { name: 'Signia Nx', correct: 'Signia Nx' }
                ],
                products: [
                    { name: 'Active', correct: 'Active' },
                    { name: 'Active Pro', correct: 'Active Pro' },
                    { name: 'Insio Charge&Go AX', correct: 'Insio™ Charge&Go AX' },
                    { name: 'Insio IX', correct: 'Insio™ IX' },
                    { name: 'Insio IX IIC/CIC', correct: 'Insio IX IIC/CIC' },
                    { name: 'Insio Nx', correct: 'Insio™ Nx' },
                    { name: 'Intuis 3 CIC', correct: 'Intuis™ 3 CIC' },
                    { name: 'Intuis 3 ITC', correct: 'Intuis™ 3 ITC' },
                    { name: 'Intuis 3 ITE', correct: 'Intuis™ 3 ITE' },
                    { name: 'Intuis 3 Click CIC', correct: 'Intuis™ 3 Click CIC' },
                    { name: 'Intuis 3 Click ITC', correct: 'Intuis™ 3 Click ITC' },
                    { name: 'Intuis 3 RIC312', correct: 'Intuis™ 3 RIC312' },
                    { name: 'Intius 3 M', correct: 'Intius™ 3 M' },
                    { name: 'Intius 3 P', correct: 'Intius™ 3 P' },
                    { name: 'Intius 3 S', correct: 'Intius™ 3 S' },
                    { name: 'Intius 3 SP', correct: 'Intius™ 3 SP' },
                    { name: 'Motion 13 Nx', correct: 'Motion™ 13 Nx' },
                    { name: 'Motion 13P Nx', correct: 'Motion™ 13P Nx' },
                    { name: 'Motion Charge&Go P X', correct: 'Motion™ Charge&Go P X' },
                    { name: 'Motion Charge&Go SP X', correct: 'Motion™ Charge&Go SP X' },
                    { name: 'Motion Charge&Go X', correct: 'Motion™ Charge&Go X' },
                    { name: 'Pure 312 AX', correct: 'Pure™ 312 AX' },
                    { name: 'Pure 312 X', correct: 'Pure™ 312 X' },
                    { name: 'Pure Charge&Go AX', correct: 'Pure™ Charge&Go AX' },
                    { name: 'Pure Charge&Go IX', correct: 'Pure™ Charge&Go IX' },
                    { name: 'Pure Charge&Go T AX', correct: 'Pure™ Charge&Go T AX' },
                    { name: 'Pure Charge&Go T IX', correct: 'Pure™ Charge&Go T IX' },
                    { name: 'Pure Charge&Go X', correct: 'Pure™ Charge&Go X' },
                    { name: 'Silk Charge&Go IX', correct: 'Silk™ Charge&Go IX' },
                    { name: 'Styletto AX', correct: 'Styletto™ AX' },
                    { name: 'Styletto IX', correct: 'Styletto™ IX' },
                    { name: 'Styletto X', correct: 'Styletto™ X' },
                    { name: 'Silk X', correct: 'Silk™ X' }
                ],
                features: [
                    { name: 'Augmented Focus', correct: 'Augmented Focus™' },
                    { name: 'AutoFit', correct: 'AutoFit™' },
                    { name: 'Connexx', correct: 'Connexx™' },
                    { name: 'e2e Wireless', correct: 'e2e Wireless™' },
                    { name: 'eWindScreen', correct: 'eWindScreen™' },
                    { name: 'OVP', correct: 'OVP™' },
                    { name: 'SoundSmoothing', correct: 'SoundSmoothing™' },
                    { name: 'TruAcoustics', correct: 'TruAcoustics™' }
                ],
                phoneFormat: '(800) 766-4500',
                disclosure: 'Signia is a registered trademark of WSAUD A/S.'
            },
            rexton: {
                platforms: [
                    { name: 'BiCore', correct: 'BiCore™' },
                    { name: 'MotionCore', correct: 'MotionCore™' },
                    { name: 'MyCore', correct: 'MyCore™' },
                    { name: 'Reach', correct: 'Reach' },
                    { name: 'TruCore', correct: 'TruCore' }
                ],
                products: [
                    { name: 'BiCore B-Li M Rugged', correct: 'BiCore™ B-Li M Rugged' },
                    { name: 'BiCore B M', correct: 'BiCore™ B M' },
                    { name: 'BiCore B P', correct: 'BiCore™ B P' },
                    { name: 'BiCore B HP', correct: 'BiCore™ B HP' },
                    { name: 'BiCore C R-Li', correct: 'BiCore™ C R-Li' },
                    { name: 'BiCore C R-Li T', correct: 'BiCore™ C R-Li T' },
                    { name: 'BiCore Custom Li', correct: 'BiCore™ Custom Li' },
                    { name: 'BiCore R-Li', correct: 'BiCore™ R-Li' },
                    { name: 'BiCore R-Li T', correct: 'BiCore™ R-Li T' },
                    { name: 'BiCore R312', correct: 'BiCore™ R312' },
                    { name: 'BiCore SR', correct: 'BiCore™ SR' },
                    { name: 'M-Core B-Li M', correct: 'M-Core™ B-Li M' },
                    { name: 'M-Core B-Li P', correct: 'M-Core™ B-Li P' },
                    { name: 'M-Core B-Li HP', correct: 'M-Core™ B-Li HP' },
                    { name: 'M-Core iX-CIC', correct: 'M-Core™ iX-CIC' },
                    { name: 'M-Core R-Li', correct: 'M-Core™ R-Li' },
                    { name: 'M-Core R-Li T', correct: 'M-Core™ R-Li T' },
                    { name: 'M-Core R312', correct: 'M-Core™ R312' },
                    { name: 'M-Core SR', correct: 'M-Core™ SR' },
                    { name: 'Mosaic HP 6C BTE', correct: 'Mosaic HP 6C BTE' },
                    { name: 'Mosaic M 8C BTE', correct: 'Mosaic M 8C BTE' },
                    { name: 'Mosaic P 8C BTE', correct: 'Mosaic P 8C BTE' },
                    { name: 'Reach inoX-CIC Li', correct: 'Reach inoX-CIC Li' },
                    { name: 'Reach R-Li T', correct: 'Reach R-Li T' },
                    { name: 'Sterling 8C Customs', correct: 'Sterling 8C Customs' }
                ],
                features: [
                    { name: 'AutoFit', correct: 'AutoFit™' },
                    { name: 'Connexx', correct: 'Connexx™' },
                    { name: 'Lifeproof', correct: 'Lifeproof™' },
                    { name: 'SoundSmoothing', correct: 'SoundSmoothing™' }
                ],
                phoneFormat: '(800) 876-1141',
                disclosure: 'Rexton is a registered trademark of WSAUD A/S.'
            },
            widex: {
                products: [
                    { name: 'Widex SmartRIC', correct: 'Widex SmartRIC™' },
                    { name: 'SmartRIC', correct: 'SmartRIC™' },
                    { name: 'Widex Moment Sheer', correct: 'Widex Moment Sheer™' },
                    { name: 'Moment Sheer', correct: 'Moment Sheer™' },
                    { name: 'Widex Moment', correct: 'Widex Moment™' },
                    { name: 'Moment', correct: 'Moment™' },
                    { name: 'Widex Magnify', correct: 'Widex Magnify' },
                    { name: 'Magnify', correct: 'Magnify' },
                    { name: 'Widex Evoke', correct: 'Widex Evoke™' },
                    { name: 'Evoke', correct: 'Evoke™' },
                    { name: 'Widex Allure', correct: 'Widex Allure™' },
                    { name: 'Evoke', correct: 'Evoke™' }
                ],
                features: [
                    { name: 'CAMISHA', correct: 'CAMISHA™' },
                    { name: 'Compass GPS', correct: 'Compass™ GPS' },
                    { name: 'Echo-Free', correct: 'Echo-Free™' },
                    { name: 'NanoCare', correct: 'NanoCare™' },
                    { name: 'PureSound', correct: 'PureSound™' },
                    { name: 'SoundRelax', correct: 'SoundRelax™' },
                    { name: 'TruAcoustics', correct: 'TruAcoustics™' },
                    { name: 'WidexLink', correct: 'WidexLink™' },
                    { name: 'ZeroDelay', correct: 'ZeroDelay™' }
                ],
                accessories: [
                    { name: 'COM-DEX', correct: 'COM-DEX™' },
                    { name: 'COM-DEX Remote Mic', correct: 'COM-DEX™ Remote Mic' },
                    { name: 'PHONE-DEX 2', correct: 'PHONE-DEX™ 2' },
                    { name: 'RC-DEX', correct: 'RC-DEX™' },
                    { name: 'TV-DEX', correct: 'TV-DEX™' },
                    { name: 'TV PLAY', correct: 'TV PLAY™' },
                    { name: 'Widex Sound Assist', correct: 'Widex Sound Assist™' }
                ],
                phoneFormat: '1.800.221.0188',
                disclosure: 'Widex is a registered trademark of WSAUD A/S.'
            }
        };

        const commonTerms = {
            replacements: {
                'patients': 'wearers',
                'customers': 'wearers',
                'clients': 'wearers',
                'patient': 'wearer',
                'customer': 'wearer',
                'client': 'wearer'
            },
            capitalizations: {
                'hcp': 'HCP',
                'hcps': 'HCPs',
                'hearing care professional': 'Hearing Care Professional',
                'hearing care professionals': 'Hearing Care Professionals'
            },
            styles: ['BTE', 'RIC', 'ITE', 'ITC', 'CIC', 'IIC', 'RITE'],
            disclosures: {
                bluetooth: 'Bluetooth® word mark and logos are owned by the Bluetooth SIG, Inc. and any use of such marks by WSAUD A/S is under license.',
                apple: 'Apple, the Apple logo and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.',
                android: 'Android, Google Play and the Google Play logo are trademarks of Google Inc.'
            }
        };

        class BrandComplianceChecker {
            constructor() {
                this.originalText = '';
                this.correctedText = '';
                this.issues = [];
                this.firstMentions = new Set();
                this.requiredDisclosures = new Set();
                this.initializeEventListeners();
                this.setLastModified();
            }
            
            setLastModified() {
                const lastModifiedElement = document.getElementById('lastModified');
                const now = new Date();
                const options = { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                };
                lastModifiedElement.textContent = now.toLocaleDateString('en-US', options);
            }
            
            initializeEventListeners() {
                const uploadArea = document.getElementById('uploadArea');
                const fileInput = document.getElementById('fileInput');
                const textArea = document.getElementById('textArea');
                const analyzeBtn = document.getElementById('analyzeBtn');
                const downloadBtn = document.getElementById('downloadBtn');
                
                uploadArea.addEventListener('click', () => fileInput.click());
                uploadArea.addEventListener('dragover', this.handleDragOver.bind(this));
                uploadArea.addEventListener('drop', this.handleDrop.bind(this));
                uploadArea.addEventListener('dragleave', this.handleDragLeave.bind(this));
                
                fileInput.addEventListener('change', this.handleFileSelect.bind(this));
                analyzeBtn.addEventListener('click', this.analyzeContent.bind(this));
                downloadBtn.addEventListener('click', this.downloadCorrectedContent.bind(this));
                
                const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(checkbox => {
                    checkbox.addEventListener('change', this.updateFormValidation.bind(this));
                });
                
                textArea.addEventListener('input', this.updateFormValidation.bind(this));
            }
            
            updateFormValidation() {
                const textArea = document.getElementById('textArea');
                const analyzeBtn = document.getElementById('analyzeBtn');
                const errorElement = document.getElementById('brandValidationError');
                
                const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                const isAnyChecked = Array.from(checkboxes).some(cb => cb.checked);
                const hasText = textArea.value.trim().length > 0;
                
                if (isAnyChecked) {
                    errorElement.style.display = 'none';
                } else {
                    errorElement.style.display = 'block';
                }
                
                analyzeBtn.disabled = !(hasText && isAnyChecked);
            }
            
            handleDragOver(e) {
                e.preventDefault();
                e.currentTarget.classList.add('dragover');
            }
            
            handleDragLeave(e) {
                e.currentTarget.classList.remove('dragover');
            }
            
            handleDrop(e) {
                e.preventDefault();
                e.currentTarget.classList.remove('dragover');
                const files = Array.from(e.dataTransfer.files);
                this.processFiles(files);
            }
            
            handleFileSelect(e) {
                const files = Array.from(e.target.files);
                this.processFiles(files);
            }
            
            async processFiles(files) {
                const analyzeBtn = document.getElementById('analyzeBtn');
                const progressBar = document.getElementById('progressBar');
                const progressFill = document.getElementById('progressFill');
                
                progressBar.style.display = 'block';
                analyzeBtn.disabled = true;
                
                let combinedText = '';
                
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    progressFill.style.width = `${(i / files.length) * 100}%`;
                    
                    try {
                        const text = await this.extractTextFromFile(file);
                        combinedText += text + '\n\n';
                    } catch (error) {
                        console.error(`Error processing file ${file.name}:`, error);
                        alert(`Error processing file ${file.name}. Please try again.`);
                    }
                }
                
                if (combinedText.trim()) {
                    document.getElementById('textArea').value = combinedText.trim();
                    this.updateFormValidation();
                }
                
                progressFill.style.width = '100%';
                setTimeout(() => {
                    progressBar.style.display = 'none';
                    progressFill.style.width = '0%';
                }, 1000);
            }
            
            async extractTextFromFile(file) {
                const fileType = file.type;
                const fileName = file.name.toLowerCase();
                
                if (fileType === 'text/plain' || fileName.endsWith('.txt')) {
                    return await this.readTextFile(file);
                } else if (fileType === 'text/html' || fileName.endsWith('.html')) {
                    return await this.readHTMLFile(file);
                } else if (fileType === 'application/pdf' || fileName.endsWith('.pdf')) {
                    return await this.readPDFFile(file);
                } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || fileName.endsWith('.docx')) {
                    return await this.readDOCXFile(file);
                } else if (fileType === 'application/msword' || fileName.endsWith('.doc')) {
                    throw new Error('DOC files are not supported. Please convert to DOCX format.');
                } else {
                    throw new Error('Unsupported file type');
                }
            }
            
            readTextFile(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (e) => resolve(e.target.result);
                    reader.onerror = () => reject(new Error('Failed to read text file'));
                    reader.readAsText(file);
                });
            }
            
            readHTMLFile(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        try {
                            const parser = new DOMParser();
                            const doc = parser.parseFromString(e.target.result, 'text/html');
                            resolve(doc.body.textContent || doc.body.innerText || '');
                        } catch (error) {
                            reject(new Error('Failed to parse HTML file'));
                        }
                    };
                    reader.onerror = () => reject(new Error('Failed to read HTML file'));
                    reader.readAsText(file);
                });
            }
            
            async readPDFFile(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = async (e) => {
                        try {
                            const arrayBuffer = e.target.result;
                            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
                            let fullText = '';
                            
                            for (let i = 1; i <= pdf.numPages; i++) {
                                const page = await pdf.getPage(i);
                                const textContent = await page.getTextContent();
                                const pageText = textContent.items.map(item => item.str).join(' ');
                                fullText += pageText + '\n';
                            }
                            
                            resolve(fullText);
                        } catch (error) {
                            reject(new Error('Failed to read PDF file'));
                        }
                    };
                    reader.onerror = () => reject(new Error('Failed to read PDF file'));
                    reader.readAsArrayBuffer(file);
                });
            }
            
            async readDOCXFile(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = async (e) => {
                        try {
                            const arrayBuffer = e.target.result;
                            const result = await mammoth.extractRawText({ arrayBuffer: arrayBuffer });
                            resolve(result.value);
                        } catch (error) {
                            reject(new Error('Failed to read DOCX file'));
                        }
                    };
                    reader.onerror = () => reject(new Error('Failed to read DOCX file'));
                    reader.readAsArrayBuffer(file);
                });
            }
            
isHeader(line, lineIndex, lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine) return false;
    
    // PRIMARY CHECK: Word count (headers typically have fewer words)
    const words = trimmedLine.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    // Headers are typically 12 words or fewer
    if (wordCount > 12) return false;
    
    // Additional header indicators
    const hasEmojis = /[\u{1F300}-\u{1F9FF}]/u.test(trimmedLine);
    const hasExclamation = trimmedLine.includes('!');
    const isAllCaps = trimmedLine === trimmedLine.toUpperCase();
    const startsWithHeading = /^heading:/i.test(trimmedLine);
    
    // Check if surrounded by blank lines
    const prevLine = lineIndex > 0 ? lines[lineIndex - 1].trim() : '';
    const nextLine = lineIndex < lines.length - 1 ? lines[lineIndex + 1].trim() : '';
    const surroundedByBlankLines = (!prevLine || !nextLine);
    
    // Enhanced header detection based on word count and characteristics
    const isLikelyHeader = 
        (wordCount <= 8) || // Very short lines are likely headers
        (wordCount <= 12 && (
            surroundedByBlankLines || 
            hasEmojis || 
            hasExclamation ||
            isAllCaps ||
            startsWithHeading ||
            this.isTitleCase(trimmedLine)
        ));
    
    return isLikelyHeader;
}

// Helper function for better title case detection
isTitleCase(text) {
    // Remove emojis and special characters for title case check
    const cleanText = text.replace(/[\u{1F300}-\u{1F9FF}!:]/gu, '').trim();
    if (!cleanText) return false;
    
    const words = cleanText.split(/\s+/).filter(word => word.length > 0);
    if (words.length === 0) return false;
    
    return words.every(word => {
        if (word.length === 0) return true;
        return word.charAt(0) === word.charAt(0).toUpperCase();
    });
}


            
analyzeContent() {
    const textArea = document.getElementById('textArea');
    const text = textArea.value.trim();
    
    if (!text) {
        alert('Please upload a file or enter text to analyze.');
        return;
    }
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const isAnyChecked = Array.from(checkboxes).some(cb => cb.checked);
    if (!isAnyChecked) {
        alert('Please select at least one brand to validate against.');
        return;
    }
    
    this.originalText = text;
    this.correctedText = text;
    this.issues = [];
    this.firstMentions = new Set();
    this.requiredDisclosures = new Set();
    // REMOVED: this.trackedCorrections = new Set();
    
    // Apply corrections in specific order
    this.applyCommonTerminologyFixes();
    this.applyDisclosureRules();
    this.applyBrandSpecificRules();
    this.applyStyleCorrections();
    this.applyPhoneNumberFormatting();
    
    this.displayResults();
}
            
            applyCommonTerminologyFixes() {
                // Fix common terminology
                Object.entries(commonTerms.replacements).forEach(([incorrect, correct]) => {
                    const regex = new RegExp(`\\b${this.escapeRegex(incorrect)}\\b`, 'gi');
                    this.correctedText = this.correctedText.replace(regex, correct);
                });
                
                // Fix capitalization
                Object.entries(commonTerms.capitalizations).forEach(([incorrect, correct]) => {
                    const regex = new RegExp(`\\b${this.escapeRegex(incorrect)}\\b`, 'gi');
                    this.correctedText = this.correctedText.replace(regex, correct);
                });
            }
            
            applyDisclosureRules() {
                // Process Apple/iPhone FIRST (highest priority)
                this.processAppleTerms();
                
                // Process iOS (no trademark symbols)
                this.processiOSTerms();
                
                // Process Android LAST (with ™ symbol)
                this.processAndroidTerms();
                
                // Process Bluetooth
                this.processBluetoothTerms();
            }
            
            processAppleTerms() {
                // Handle iPhone variations - FIXED: Only match terms WITHOUT existing trademark symbols
                const iPhoneVariants = ['iphone', 'Iphone', 'IPhone', 'IPHONE'];
                let isFirstMention = !this.firstMentions.has('iphone');
                
                iPhoneVariants.forEach(variant => {
                    // CRITICAL FIX: Negative lookahead to avoid matching terms that already have trademark symbols
                    const regex = new RegExp(`\\b${this.escapeRegex(variant)}\\b(?![™®])`, 'g');
                    
                    if (isFirstMention && this.correctedText.match(regex)) {
                        this.correctedText = this.correctedText.replace(regex, 'iPhone®');
                        this.firstMentions.add('iphone');
                        this.requiredDisclosures.add('apple');
                        isFirstMention = false;
                    } else {
                        this.correctedText = this.correctedText.replace(regex, 'iPhone');
                    }
                });
                
                // Handle Apple variations - FIXED: Only match terms WITHOUT existing trademark symbols
                const appleVariants = ['apple', 'APPLE'];
                let isFirstAppleMention = !this.firstMentions.has('apple');
                
                appleVariants.forEach(variant => {
                    const regex = new RegExp(`\\b${this.escapeRegex(variant)}\\b(?![™®])`, 'g');
                    
                    if (isFirstAppleMention && this.correctedText.match(regex)) {
                        this.correctedText = this.correctedText.replace(regex, 'Apple®');
                        this.firstMentions.add('apple');
                        this.requiredDisclosures.add('apple');
                        isFirstAppleMention = false;
                    } else {
                        this.correctedText = this.correctedText.replace(regex, 'Apple');
                    }
                });
                
                // Handle made-for-iPhone - FIXED: Only match terms WITHOUT existing trademark symbols
                const madeForIPhoneVariants = ['made for iPhone', 'made for iphone', 'Made For iPhone'];
                madeForIPhoneVariants.forEach(variant => {
                    const regex = new RegExp(`${this.escapeRegex(variant)}(?![™®])`, 'gi');
                    if (!this.firstMentions.has('made-for-iphone') && this.correctedText.match(regex)) {
                        this.correctedText = this.correctedText.replace(regex, 'made-for-iPhone®');
                        this.firstMentions.add('made-for-iphone');
                        this.requiredDisclosures.add('apple');
                    } else {
                        this.correctedText = this.correctedText.replace(regex, 'made-for-iPhone');
                    }
                });
            }
            
            processiOSTerms() {
                // iOS gets no trademark symbols but needs correct capitalization
                const iOSVariants = ['ios', 'IOS', 'Ios'];
                iOSVariants.forEach(variant => {
                    const regex = new RegExp(`\\b${this.escapeRegex(variant)}\\b`, 'g');
                    this.correctedText = this.correctedText.replace(regex, 'iOS');
                });
            }
            
            processAndroidTerms() {
                // Handle Android variations - FIXED: Only match terms WITHOUT existing trademark symbols
                const androidVariants = ['android', 'ANDROID'];
                let isFirstMention = !this.firstMentions.has('android');
                
                androidVariants.forEach(variant => {
                    const regex = new RegExp(`\\b${this.escapeRegex(variant)}\\b(?![™®])`, 'g');
                    
                    if (isFirstMention && this.correctedText.match(regex)) {
                        this.correctedText = this.correctedText.replace(regex, 'Android™');
                        this.firstMentions.add('android');
                        this.requiredDisclosures.add('android');
                        isFirstMention = false;
                    } else {
                        this.correctedText = this.correctedText.replace(regex, 'Android');
                    }
                });
            }
            
            processBluetoothTerms() {
                // FIXED: Only match terms WITHOUT existing trademark symbols
                const bluetoothVariants = ['bluetooth', 'Bluetooth', 'BLUETOOTH'];
                let isFirstMention = !this.firstMentions.has('bluetooth');
                
                bluetoothVariants.forEach(variant => {
                    const regex = new RegExp(`\\b${this.escapeRegex(variant)}\\b(?![™®])`, 'g');
                    
                    if (isFirstMention && this.correctedText.match(regex)) {
                        this.correctedText = this.correctedText.replace(regex, 'Bluetooth®');
                        this.firstMentions.add('bluetooth');
                        this.requiredDisclosures.add('bluetooth');
                        isFirstMention = false;
                    } else {
                        this.correctedText = this.correctedText.replace(regex, 'Bluetooth');
                    }
                });
            }
            
            applyBrandSpecificRules() {
                const selectedBrands = this.getSelectedBrands();
                
                selectedBrands.forEach(brand => {
                    const rules = brandRules[brand];
                    
                    // Process platforms
                    if (rules.platforms) {
                        rules.platforms.forEach(platform => {
                            this.processProductName(platform, brand);
                        });
                    }
                    
                    // Process products
                    rules.products.forEach(product => {
                        this.processProductName(product, brand);
                    });
                    
                    // Process features
                    if (rules.features) {
                        rules.features.forEach(feature => {
                            this.processProductName(feature, brand);
                        });
                    }
                    
                    // Process accessories
                    if (rules.accessories) {
                        rules.accessories.forEach(accessory => {
                            this.processProductName(accessory, brand);
                        });
                    }
                });
            }
            
processProductName(product, brand) {
    const baseName = product.name;
    const correctName = product.correct;
    const baseNameLower = baseName.toLowerCase();
    
    // Only process if we haven't seen this term before
    if (!this.firstMentions.has(baseNameLower)) {
        const escapedBaseName = this.escapeRegex(baseName);
        const regex = new RegExp(`\\b${escapedBaseName}\\b(?![™®])`, 'i');
        
        // FIXED: Process line by line to skip headers
        const lines = this.correctedText.split('\n');
        let foundFirstBodyMention = false;
        let issuePosition = -1;
        let originalMatch = '';
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            // Skip if this line is a header
            if (this.isHeader(line, i, lines)) {
                continue;
            }
            
            // Look for the term in non-header lines only
            const match = line.match(regex);
            if (match && !foundFirstBodyMention) {
                // Replace only this first body text occurrence
                lines[i] = line.replace(regex, correctName);
                foundFirstBodyMention = true;
                
                // Calculate position in original text for issue tracking
                const linesBeforeMatch = this.originalText.split('\n').slice(0, i);
                const textBeforeMatch = linesBeforeMatch.join('\n') + (i > 0 ? '\n' : '');
                issuePosition = textBeforeMatch.length + line.indexOf(match[0]);
                originalMatch = match[0];
                
                break; // Stop after first body text match
            }
        }
        
        if (foundFirstBodyMention) {
            this.correctedText = lines.join('\n');
            this.firstMentions.add(baseNameLower);
            
            // Track the issue
            if (issuePosition !== -1) {
                this.addIssue(
                    issuePosition, 
                    originalMatch, 
                    correctName, 
                    'trademark', 
                    `Add trademark symbol: "${originalMatch}" → "${correctName}"`
                );
            }
        }
    }
}

         
            applyStyleCorrections() {
                commonTerms.styles.forEach(style => {
                    const regex = new RegExp(`\\b${this.escapeRegex(style.toLowerCase())}\\b`, 'gi');
                    this.correctedText = this.correctedText.replace(regex, style);
                });
                
                // Fix app to lowercase when used generically
                const appRegex = /\bApp\b(?!\s+Store)/g;
                this.correctedText = this.correctedText.replace(appRegex, 'app');
            }
            
            applyPhoneNumberFormatting() {
                const selectedBrands = this.getSelectedBrands();
                
                selectedBrands.forEach(brand => {
                    const rules = brandRules[brand];
                    if (rules.phoneFormat) {
                        // This is a simplified phone number correction
                        // In a real implementation, you'd want more sophisticated phone number detection
                        const phoneRegex = /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/g;
                        // For demo purposes, we'll just flag phone numbers that don't match the expected format
                    }
                });
            }
            
            getSelectedBrands() {
                const brands = [];
                if (document.getElementById('signiaCheck').checked) brands.push('signia');
                if (document.getElementById('rextonCheck').checked) brands.push('rexton');
                if (document.getElementById('widexCheck').checked) brands.push('widex');
                return brands;
            }
            
addIssue(position, original, corrected, type, description) {
    this.issues.push({
        position,
        original,
        corrected,
        type,
        description
    });
}

            
            displayResults() {
                const resultsSection = document.getElementById('resultsSection');
                resultsSection.style.display = 'block';
                
                this.displayIssuesSummary();
                this.displayOriginalContent();
                this.displayCorrectedContent();
                this.displayRequiredDisclosures();
                
                // Scroll to results
                resultsSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            displayIssuesSummary() {
                const summaryContainer = document.getElementById('issuesSummary');
                
                const errors = this.issues.filter(issue => issue.type === 'error').length;
                const warnings = this.issues.filter(issue => issue.type === 'warning').length;
                const corrections = this.issues.filter(issue => 
                    ['terminology', 'capitalization', 'trademark'].includes(issue.type)
                ).length;
                
                summaryContainer.innerHTML = `
                    <h3>📊 Analysis Summary</h3>
                    <div style="margin-top: 15px;">
                        <span class="issue-count errors">Errors: ${errors}</span>
                        <span class="issue-count warnings">Warnings: ${warnings}</span>
                        <span class="issue-count corrections">Corrections: ${corrections}</span>
                    </div>
                    <p style="margin-top: 15px; font-size: 16px;"><strong>Total issues found: ${this.issues.length}</strong></p>
                `;
            }
            
            displayOriginalContent() {
                const container = document.getElementById('originalContent');
                if (!container) return;
                
                const fragment = document.createDocumentFragment();
                let lastIndex = 0;
                
                const sortedIssues = [...this.issues].sort((a, b) => a.position - b.position);
                
                sortedIssues.forEach(issue => {
                    if (issue.position > lastIndex) {
                        const textNode = document.createTextNode(
                            this.originalText.substring(lastIndex, issue.position)
                        );
                        fragment.appendChild(textNode);
                    }
                    
                    const span = document.createElement('span');
                    span.className = this.getHighlightClass(issue.type);
                    span.title = issue.description;
                    span.textContent = issue.original;
                    fragment.appendChild(span);
                    
                    lastIndex = issue.position + issue.original.length;
                });
                
                if (lastIndex < this.originalText.length) {
                    const textNode = document.createTextNode(
                        this.originalText.substring(lastIndex)
                    );
                    fragment.appendChild(textNode);
                }
                
                container.innerHTML = '';
                container.appendChild(fragment);
            }
            
            displayCorrectedContent() {
                const container = document.getElementById('correctedContent');
                if (!container) return;
                
                container.textContent = this.correctedText;
            }
            
            displayRequiredDisclosures() {
                const disclosureSection = document.getElementById('disclosureSection');
                const disclosureText = document.getElementById('disclosureText');
                
                if (this.requiredDisclosures.size > 0) {
                    disclosureSection.style.display = 'block';
                    
                    let disclosureHTML = '<p><strong>Copy and paste these required disclosures:</strong></p>';
                    
                    this.requiredDisclosures.forEach(disclosure => {
                        if (commonTerms.disclosures[disclosure]) {
                            disclosureHTML += `<p style="margin: 10px 0; padding: 10px; background: white; border-radius: 4px;">${commonTerms.disclosures[disclosure]}</p>`;
                        }
                    });
                    
                    // Add brand-specific disclosures
                    const selectedBrands = this.getSelectedBrands();
                    selectedBrands.forEach(brand => {
                        const rules = brandRules[brand];
                        if (rules.disclosure) {
                            disclosureHTML += `<p style="margin: 10px 0; padding: 10px; background: white; border-radius: 4px;">${rules.disclosure}</p>`;
                        }
                    });
                    
                    disclosureText.innerHTML = disclosureHTML;
                } else {
                    disclosureSection.style.display = 'none';
                }
            }
            
            getHighlightClass(type) {
                switch (type) {
                    case 'error': return 'highlight-error';
                    case 'warning': return 'highlight-warning';
                    case 'terminology':
                    case 'capitalization':
                    case 'trademark':
                        return 'highlight-error';
                    default: return 'highlight-correction';
                }
            }
            
            async downloadCorrectedContent() {
                try {
                    const doc = new docx.Document({
                        sections: [{
                            properties: {},
                            children: this.correctedText.split('\n').map(line => 
                                new docx.Paragraph({
                                    children: [new docx.TextRun(line || ' ')],
                                })
                            ),
                        }],
                    });
                    
                    const blob = await docx.Packer.toBlob(doc);
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'brand-compliant-content.docx';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                } catch (error) {
                    console.error('Error generating DOCX:', error);
                    const blob = new Blob([this.correctedText], { type: 'text/plain;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'brand-compliant-content.txt';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    alert('DOCX generation failed. Downloaded as text file instead.');
                }
            }
            
            escapeRegex(string) {
                return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            }
        }
        
        // Initialize the application
        document.addEventListener('DOMContentLoaded', () => {
            new BrandComplianceChecker();
        });

// Fixed Glossary functionality with working search
class GlossaryManager {
    constructor() {
        this.initializeGlossary();
    }
    
    initializeGlossary() {
        const toggleBtn = document.getElementById('glossaryToggle');
        const overlay = document.getElementById('glossaryOverlay');
        const modal = document.getElementById('glossaryModal');
        const closeBtn = document.getElementById('glossaryClose');
        const searchInput = document.getElementById('glossarySearch');
        
        toggleBtn.addEventListener('click', () => this.showGlossary());
        closeBtn.addEventListener('click', () => this.hideGlossary());
        overlay.addEventListener('click', () => this.hideGlossary());
        
        // FIXED: Add debounced search for better performance
        searchInput.addEventListener('input', this.debounce((e) => {
            this.filterGlossary(e.target.value);
        }, 300));
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                this.hideGlossary();
            }
        });
    }
    
    // FIXED: Add debounce function for search performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    showGlossary() {
        this.generateGlossaryContent();
        document.getElementById('glossaryOverlay').style.display = 'block';
        document.getElementById('glossaryModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Clear search on show
        document.getElementById('glossarySearch').value = '';
    }
    
    hideGlossary() {
        document.getElementById('glossaryOverlay').style.display = 'none';
        document.getElementById('glossaryModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    generateGlossaryContent() {
        const container = document.getElementById('glossaryContainer');
        container.innerHTML = '';
        
        // Generate content from brandRules JSON
        Object.entries(brandRules).forEach(([brandName, brandData]) => {
            const brandSection = this.createBrandSection(brandName, brandData);
            container.appendChild(brandSection);
        });
        
        // Add common terms section
        const commonSection = this.createCommonTermsSection();
        container.appendChild(commonSection);
    }
    
    createBrandSection(brandName, brandData) {
        const section = document.createElement('div');
        section.className = 'glossary-brand';
        section.setAttribute('data-brand', brandName);
        
        const header = document.createElement('div');
        header.className = 'glossary-brand-header';
        header.innerHTML = `
            <h3>${brandName.charAt(0).toUpperCase() + brandName.slice(1)} Nomenclature</h3>
            <span class="glossary-brand-toggle">▼</span>
        `;
        
        const content = document.createElement('div');
        content.className = 'glossary-brand-content';
        
        // Add categories dynamically from JSON
        Object.entries(brandData).forEach(([categoryName, items]) => {
            if (Array.isArray(items) && items.length > 0) {
                const category = this.createCategory(categoryName, items);
                content.appendChild(category);
            } else if (categoryName === 'phoneFormat' || categoryName === 'disclosure') {
                const category = this.createInfoCategory(categoryName, items);
                content.appendChild(category);
            }
        });
        
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            content.classList.toggle('active');
        });
        
        section.appendChild(header);
        section.appendChild(content);
        
        return section;
    }
    
    createCategory(categoryName, items) {
        const category = document.createElement('div');
        category.className = 'glossary-category';
        category.setAttribute('data-category', categoryName);
        
        const title = document.createElement('h4');
        title.textContent = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
        
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'glossary-items';
        
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'glossary-item';
            
            // FIXED: Properly set searchable data for all item types
            let searchableText = '';
            let displayHTML = '';
            
            if (item.name && item.correct) {
                searchableText = `${item.name} ${item.correct}`.toLowerCase();
                displayHTML = `
                    <span class="name">${item.name}</span> → 
                    <span class="correct">${item.correct}</span>
                `;
            } else if (typeof item === 'string') {
                searchableText = item.toLowerCase();
                displayHTML = `<span class="correct">${item}</span>`;
            }
            
            // CRITICAL FIX: Set data-searchable attribute correctly
            itemElement.setAttribute('data-searchable', searchableText);
            itemElement.innerHTML = displayHTML;
            
            itemsContainer.appendChild(itemElement);
        });
        
        category.appendChild(title);
        category.appendChild(itemsContainer);
        
        return category;
    }
    
    createInfoCategory(categoryName, value) {
        const category = document.createElement('div');
        category.className = 'glossary-category';
        
        const title = document.createElement('h4');
        title.textContent = categoryName === 'phoneFormat' ? 'Phone Format' : 'Disclosure';
        
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'glossary-items';
        
        const itemElement = document.createElement('div');
        itemElement.className = 'glossary-item';
        // FIXED: Add searchable data for info items too
        itemElement.setAttribute('data-searchable', value.toLowerCase());
        itemElement.innerHTML = `<span class="correct">${value}</span>`;
        
        itemsContainer.appendChild(itemElement);
        category.appendChild(title);
        category.appendChild(itemsContainer);
        
        return category;
    }
    
    createCommonTermsSection() {
        const section = document.createElement('div');
        section.className = 'glossary-brand';
        section.setAttribute('data-brand', 'common');
        
        const header = document.createElement('div');
        header.className = 'glossary-brand-header';
        header.innerHTML = `
            <h3>Common Terms & Guidelines</h3>
            <span class="glossary-brand-toggle">▼</span>
        `;
        
        const content = document.createElement('div');
        content.className = 'glossary-brand-content';
        
        // Add common terms from commonTerms JSON
        Object.entries(commonTerms).forEach(([categoryName, items]) => {
            if (categoryName !== 'disclosures') {
                const category = this.createCommonCategory(categoryName, items);
                content.appendChild(category);
            }
        });
        
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            content.classList.toggle('active');
        });
        
        section.appendChild(header);
        section.appendChild(content);
        
        return section;
    }
    
    createCommonCategory(categoryName, items) {
        const category = document.createElement('div');
        category.className = 'glossary-category';
        
        const title = document.createElement('h4');
        title.textContent = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
        
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'glossary-items';
        
        if (Array.isArray(items)) {
            items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'glossary-item';
                // FIXED: Add searchable data for array items
                itemElement.setAttribute('data-searchable', item.toLowerCase());
                itemElement.innerHTML = `<span class="correct">${item}</span>`;
                itemsContainer.appendChild(itemElement);
            });
        } else if (typeof items === 'object') {
            Object.entries(items).forEach(([key, value]) => {
                const itemElement = document.createElement('div');
                itemElement.className = 'glossary-item';
                // FIXED: Properly set searchable data for object entries
                itemElement.setAttribute('data-searchable', `${key} ${value}`.toLowerCase());
                itemElement.innerHTML = `
                    <span class="name">${key}</span> → 
                    <span class="correct">${value}</span>
                `;
                itemsContainer.appendChild(itemElement);
            });
        }
        
        category.appendChild(title);
        category.appendChild(itemsContainer);
        
        return category;
    }
    
    // COMPLETELY REWRITTEN: Fixed search functionality
    filterGlossary(searchTerm) {
        const searchLower = searchTerm.toLowerCase().trim();
        
        // Get all elements
        const items = document.querySelectorAll('.glossary-item');
        const categories = document.querySelectorAll('.glossary-category');
        const brands = document.querySelectorAll('.glossary-brand');
        
        if (!searchLower) {
            // Show all items when search is empty
            items.forEach(item => item.style.display = 'block');
            categories.forEach(category => category.style.display = 'block');
            brands.forEach(brand => brand.style.display = 'block');
            return;
        }
        
        // Filter items
        items.forEach(item => {
            const searchableText = item.getAttribute('data-searchable') || '';
            const isVisible = searchableText.includes(searchLower);
            item.style.display = isVisible ? 'block' : 'none';
        });
        
        // Show/hide categories based on visible items
        categories.forEach(category => {
            const visibleItems = category.querySelectorAll('.glossary-item[style*="block"], .glossary-item:not([style*="none"])');
            const hasVisibleItems = Array.from(visibleItems).some(item => 
                item.style.display !== 'none'
            );
            category.style.display = hasVisibleItems ? 'block' : 'none';
        });
        
        // Show/hide brands based on visible categories
        brands.forEach(brand => {
            const visibleCategories = brand.querySelectorAll('.glossary-category[style*="block"], .glossary-category:not([style*="none"])');
            const hasVisibleCategories = Array.from(visibleCategories).some(category => 
                category.style.display !== 'none'
            );
            brand.style.display = hasVisibleCategories ? 'block' : 'none';
            
            // Auto-expand brands with search results
            if (hasVisibleCategories && searchLower) {
                const header = brand.querySelector('.glossary-brand-header');
                const content = brand.querySelector('.glossary-brand-content');
                header.classList.add('active');
                content.classList.add('active');
            }
        });
    }
}

// Initialize glossary when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GlossaryManager();
});

