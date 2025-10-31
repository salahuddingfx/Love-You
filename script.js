        const defaultConfig = {
            main_message: "I Love You",
            subtitle_text: "Forever and Always",
            developer_name: "Salah Uddin Kader",
            background_color: "#ff6b9d",
            text_color: "#ffffff",
            heart_color: "#ff1744",
            font_family: "Poppins",
            font_size: 16
        };

        let config = { ...defaultConfig };

        async function onConfigChange(newConfig) {
            config = { ...config, ...newConfig };
            
            // Update text content
            const mainMessage = document.getElementById('mainMessage');
            const subtitleText = document.getElementById('subtitleText');
            const developerName = document.getElementById('developerName');
            
            if (mainMessage) {
                mainMessage.textContent = config.main_message || defaultConfig.main_message;
            }
            
            if (subtitleText) {
                subtitleText.textContent = config.subtitle_text || defaultConfig.subtitle_text;
            }

            if (developerName) {
                developerName.textContent = config.developer_name || defaultConfig.developer_name;
            }

            // Update colors
            const hearts = document.querySelectorAll('.heart');
            hearts.forEach(heart => {
                heart.style.color = config.heart_color || defaultConfig.heart_color;
            });

            // Update fonts
            const fontFamily = config.font_family || defaultConfig.font_family;
            const fontSize = config.font_size || defaultConfig.font_size;
            
            document.body.style.fontFamily = `${fontFamily}, sans-serif`;
            
            if (mainMessage) {
                mainMessage.style.fontSize = `${fontSize * 4}px`;
                mainMessage.style.color = config.text_color || defaultConfig.text_color;
            }
            
            if (subtitleText) {
                subtitleText.style.fontSize = `${fontSize * 1.5}px`;
                subtitleText.style.color = config.text_color || defaultConfig.text_color;
            }
        }

        function mapToCapabilities(config) {
            return {
                recolorables: [
                    {
                        get: () => config.background_color || defaultConfig.background_color,
                        set: (value) => {
                            config.background_color = value;
                            window.elementSdk?.setConfig({ background_color: value });
                        }
                    },
                    {
                        get: () => config.text_color || defaultConfig.text_color,
                        set: (value) => {
                            config.text_color = value;
                            window.elementSdk?.setConfig({ text_color: value });
                        }
                    },
                    {
                        get: () => config.heart_color || defaultConfig.heart_color,
                        set: (value) => {
                            config.heart_color = value;
                            window.elementSdk?.setConfig({ heart_color: value });
                        }
                    }
                ],
                borderables: [],
                fontEditable: {
                    get: () => config.font_family || defaultConfig.font_family,
                    set: (value) => {
                        config.font_family = value;
                        window.elementSdk?.setConfig({ font_family: value });
                    }
                },
                fontSizeable: {
                    get: () => config.font_size || defaultConfig.font_size,
                    set: (value) => {
                        config.font_size = value;
                        window.elementSdk?.setConfig({ font_size: value });
                    }
                }
            };
        }

        function mapToEditPanelValues(config) {
            return new Map([
                ["main_message", config.main_message || defaultConfig.main_message],
                ["subtitle_text", config.subtitle_text || defaultConfig.subtitle_text],
                ["developer_name", config.developer_name || defaultConfig.developer_name]
            ]);
        }

        // Initialize SDK
        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig,
                onConfigChange,
                mapToCapabilities,
                mapToEditPanelValues
            });
        }

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9971c87ff4b725b1',t:'MTc2MTg5OTM1MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();