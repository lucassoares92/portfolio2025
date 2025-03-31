$(document).ready(function () {
    // Smooth scrolling para links com a classe "hash"
    $('a.hash').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        if ($(target).length) { // Verifica se o elemento alvo existe
            $('html, body').animate({
                scrollTop: $(target).offset().top - 50 // Ajusta o offset para a navbar fixa
            }, 1000);
            // Não definimos 'active' aqui diretamente, deixamos o scroll cuidar disso
        }
    });

    // Atualiza o item ativo com base no scroll
    $(window).scroll(function () {
        var scrollPosition = $(document).scrollTop() + 70; // Ajusta para a altura da navbar

        // Remove 'active' de todos os itens antes de decidir qual será o ativo
        $('a.hash').parent().removeClass('active');

        // Itera sobre todos os links com a classe 'hash'
        var activeSet = false; // Flag para rastrear se já definimos um item ativo
        $('a.hash').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr('href'));

            if (refElement.length) { // Verifica se o elemento referenciado existe
                var sectionTop = refElement.offset().top;
                var sectionBottom = sectionTop + refElement.outerHeight();

                // Verifica se a posição de rolagem está dentro dos limites da seção
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    currentLink.parent().addClass('active');
                    activeSet = true;
                }
            }
        });

        // Caso especial para o topo da página (Home)
        if (!activeSet && scrollPosition < $('#sobre-mim').offset().top - 70) {
            $('a[href="#home"]').parent().addClass('active');
        }
    });

    // Configuração das partículas no header
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Configuração das partículas no footer
    particlesJS('footer-particles-js', {
        "particles": {
            "number": {
                "value": 30,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00bfff"
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.5,
                "random": true
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false
                },
                "onclick": {
                    "enable": false
                },
                "resize": true
            }
        },
        "retina_detect": true
    });

    // Força a atualização inicial do estado 'active' ao carregar a página
    $(window).trigger('scroll');
});