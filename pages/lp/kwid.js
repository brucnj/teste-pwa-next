import { Dialog, Transition, Tab } from '@headlessui/react'
import { useState, useEffect } from 'react'
import AccordionKwid from '../../components/AccordionKwid';
import ModalEspecificacao from '../../components/ModalEspecificacao'
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper.min.css";
import "../../node_modules/swiper/modules/navigation/navigation.min.css";
import "../../node_modules/swiper/modules/grid/grid.min.css"
// import "../node_modules/swiper/modules/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Grid } from 'swiper';
import { EspecificacoesKwid } from '../../especificacoesKwid';
SwiperCore.use([Autoplay, Navigation, Grid]);
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Kwid() {
    useEffect(() => {
        Aos.init({ delay: 700, duration: 700 })
    }, []);

    // Swiper
    const [swipe, setSwipe] = useState();
    const [swipeAcessories, setSwipeAcessories] = useState();
    // Accordion
    const [isShowing, setIsShowing] = useState(false);
    const [isOpened, setIsOpen] = useState(false);
    // Modal
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState();
    function modalOpen(e) {
        var content = e.currentTarget.getAttribute('data-contentkey')
        modalData = EspecificacoesKwid[0][content];

        if (isModalOpen) {
            console.log('Tentando abrir modal')
            setModalOpen(false);
            setTimeout(function () {
                setModalData(modalData);
                setModalOpen(true);
            }, 10)
        } else {
            setModalData(modalData);
            setModalOpen(true);
        }

    }


    const toggle = () => {
        setIsShowing(!isShowing);
        setIsOpen(!isOpened);
    }

    let [categories] = useState({
        Conforto: [
            {
                id: 1,
                title: 'Amplo espaço interno',
                subtitle: 'Conforto',
                description: 'Porta-malas de 290L que pode ser expandido para 1 100L com os bancos rebatidos: o maior da categoria.',
                img: 'https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/home-produto/04-porta-malas.jpg.ximg.large.webp/1575392955286.webp'
            }
        ],
        Multimidia: [
            {
                id: 2,
                title: 'Diversas possibilidades em uma tela',
                subtitle: 'Multimídia',
                description: 'O MEDIA Evolution 7" touchscreen tem tecnologias Android Auto e Apple CarPlay, para espelhamento de apps como Spotify, Waze, Google Maps e WhatsApp. Conta ainda com Eco Scoring, Eco Coaching, câmera de ré e bluetooth.',
                img: 'https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/Sistema-Multimiidia-(Apple%20CarPlay).jpg.ximg.large.webp/13acb34845.webp'
            }
        ],
        Segurança: [
            {
                id: 3,
                title: 'Item de série no SUV dos compactos',
                subtitle: 'Segurança',
                description: 'Único da categoria com 4 Airbags, 2 frontais e 2 laterais, o Kwid se destaca. Ele também vem de série com cinto de 3 pontas, além de apoio de cabeça central e 2 pontos ISOFIX nos bancos traseiros, garantindo muito mais segurança para a sua família.',
                img: 'https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/home-produto/01-airbag.jpg.ximg.large.webp/1575392951671.webp'
            }
        ],
        Praticidade: [
            {
                id: 4,
                title: 'Seu dia a dia mais prático',
                subtitle: 'Praticidade',
                description: 'A chave-canivete tem várias funções, como travamento e destravamento das portas a distância e abertura do porta-malas, além de esconder a parte metálica quando não está em uso. Já os retrovisores elétricos têm ajuste ágil e preciso, trazendo mais praticidade para o seu dia a dia.',
                img: 'https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/058-KWID-chave-canivete-ambientada.jpg.ximg.large.webp/a0cabc7417.webp'
            }
        ],
        Interior: [ 
            {
                id: 5,
                title: 'Amplo espaço interno',
                subtitle: 'Design interno',
                description: 'No Kwid ninguém fica apertado. Ele tem o maior espaço interno da categoria e muito conforto para motorista e passageiros. Inclusive no banco de trás.',
                img: 'https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/home-produto/03-espaco-interno-2.jpg.ximg.small.webp/1575392944326.webp'
            }
        ],
        Robustez: [
            {
                id: 6,
                title: 'Onde design e robustez se encontram',
                subtitle: 'Robustez',
                description: 'Com design robusto e imponente, é impossível não notar o Kwid passando por aí.',
                img: 'https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/home-produto/resize_kwid_outsider_0019_Layer%20Comp%2020.jpg.ximg.small.webp/1575392891722.webp'
            }
        ]
        
    })
    
    function classNames(...classNamees) {
        return classNamees.filter(Boolean).join(' ')
    }
    return (
        <>
            {isModalOpen && <ModalEspecificacao modalData={modalData} /> }
            <section className="box-border relative overflow-hidden text-gray-900 bg-white bg-cover border-0 border-gray-200 border-solid h-4/6 banner-kwid">
                <div className="relative z-10 max-w-6xl mx-10">
                    <div className="flex flex-col items-center justify-center w-full px-10 py-10 mt-10 border-solid mb-80 opacity-90 md:w-2/3 lg:w-1/2 md:items-start " style={{ background: '#EFDF00' }}>
                        <span className="text-base text-gray-500 uppercase">O SUV dos compactos</span>
                        <h1 className="py-2 font-extrabold text-7xl">Renault <span data-aos="fade-up-left" className="model-animation">Kwid</span></h1>
                        <p className="mb-7">O Kwid une o design de SUV às melhores características de um compacto: a economia e a praticidade.</p>
                        <button className="px-10 py-4 mx-auto text-white bg-black">Contatar um vendedor</button>
                    </div>
                </div>
                <div className="absolute top-0 right-0 hidden w-1/3 h-full md:block lg:w-1/2">
                    &nbsp;
                </div>
            </section>

            <section className="relative w-full bg-white">
                <div className="absolute bottom-0 left-0 w-full h-1/2" style={{ background: '#EFDF00' }}></div>
                <div className="relative z-10 px-10 py-16 mx-auto max-w-7xl">
                    <div className="relative flex flex-col items-center w-full h-full px-10 py-16 bg-black sm:px-12 md:px-16 lg:py-14">
                        <div className="relative flex flex-col items-center justify-between w-full h-full lg:flex-row">
                            <h2 className="max-w-lg mb-5 text-2xl font-semibold text-center text-white md:leading-tight lg:mb-0 lg:text-left md:text-4xl sm:text-3xl">
                                Conforto, economia e praticidade para você
                            </h2>
                            <div className="flex flex-col h-auto transform translate-y-2">
                                <a href="#_" className="inline-flex items-start h-auto px-8 py-4 font-extrabold text-center text-black" style={{ background: '#EFDF00' }}>
                                    Contatar um consultor
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative z-0">
                <svg width="218" height="535" viewBox="0 0 218 535" fill="none" className="absolute right-0 z-0" xmlns="http://www.w3.org/2000/svg" style={{ top: '-170px' }}>
                    <path d="M325.173 267.5L182.172 535H143.002L0 267.5L142.38 0H182.793L40.4135 267.5L162.276 497.052L284.138 267.5L213.259 133.75L233.776 95.8023L325.173 267.5ZM264.242 0H223.207L81.4487 267.5L172.845 439.198L192.741 401.25L121.862 267.5L243.724 37.3256L365.587 267.5L223.207 535H264.242L406 267.5L264.242 0Z" fill="white"/>
                </svg>
            </div>

            <section id="version" className="z-10 pb-20 bg-cover" style={{ background: '#EFDF00' }}>
                <div className="container px-8 mx-auto md:px-10">
                    <div className="container inline-flex mb-10">
                        <div className="z-10 inline-flex w-10/12">
                            <svg width="69" height="60" viewBox="0 0 69 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M63.4728 27.75L50.0678 0L55.5482 2.91515e-06L69 27.75L49.6122 60H44L63.4728 27.75Z" fill="black" />
                                <path d="M52.4728 27.75L39.0678 0L44.5482 2.91515e-06L58 27.75L38.6122 60H33L52.4728 27.75Z" fill="black" />
                                <path d="M41.4728 27.75L28.0678 0L33.5482 2.91515e-06L47 27.75L27.6122 60H22L41.4728 27.75Z" fill="black" />
                                <path d="M30.4728 27.75L17.0678 0L22.5482 2.91515e-06L36 27.75L16.6122 60H11L30.4728 27.75Z" fill="black" />
                                <path d="M19.4728 27.75L6.06781 0L11.5482 2.91515e-06L25 27.75L5.61224 60H0L19.4728 27.75Z" fill="black" />
                            </svg>
                            <div className="inline-block">
                                <h2 className="ml-4 text-3xl font-extrabold uppercase md:text-4xl">Um Carro, muitas versões</h2>
                                <span className="ml-4 text-base md:text-xl">Uma delas foi feita para você</span>
                            </div>
                        </div>
                        <div className="z-10 flex-row-reverse justify-end hidden w-2/12 md:block">
                            <button onClick={() => swipe?.slidePrev()} className="p-1 mr-5 bg-black">
                                <svg className="w-12 h-12 transition-all duration-200 ease-out transform rotate-90" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <button onClick={() => swipe?.slideNext()} className="p-1 bg-black">
                                <svg className="w-12 h-12 transition-all duration-200 ease-out transform -rotate-90" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                        </div>
                    </div>

                    
                    <div className="container">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            breakpoints={{
                                "0": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 20
                                },
                                "768": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 2
                                },
                                "1024": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 20
                                }
                            }}
                            onBeforeInit={(swipper) => setSwipe(swipper)}>
                                <div className="z-10 grid gap-5">
                                    {/* Life */}
                                    <SwiperSlide>
                                        <div className="bg-white">
                                            <img src="https://www.renault.com.br/agg/vn/unique/ONE_CF_DACIA_NEQ_DENSITY1_LARGE/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FBB1%2Fkwid%2Fc%2FA-OV369-ENS_0MDL2P1SERIELIM1_-OV369" className="w-5/6 mx-auto h-2/4" />
                                            <h5 className="text-3xl font-extrabold text-center uppercase ">Life 1.0</h5>
                                            <h6 className="mb-5 text-base font-thin text-center text-gray-400">A partir de R$ 48.790</h6>
                                            <ul className="px-20 lg:px-12 xl:px-16 2xl:px-28">
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Estofamento Life</span>
                                                </li>
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Bancos em tecido</span>
                                                </li>
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Tomada 12V</span>
                                                </li>
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Apoio de cabeça traseiro central e laterais com ajustes de altura</span>
                                                </li>
                                                <div className="transition-all duration-150" style={{ display: isShowing ? "block" : "none", padding: "5px" }}>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Ar-quente</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Banco rebatível 1/1</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Retrovisores e maçanetas pretos</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Alerta sonoro e visual do uso do cinto de segurança do motorista e passageiro</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">ABS</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Cinto de segurança central traseiro subabdominal</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">2 Airbags laterais</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Sistema imobilizador do motor</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">2 Isofix</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Cintos de segurança dianteiros retráteis de 3 pontos com regulagem de altura</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">2 Airbags frontais</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Indicador de troca de marcha</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Desembaçador de vidro traseiro</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Câmbio manual de 5 velocidades</span>
                                                    </li>
                                                </div>
                                            </ul>

                                            <button onClick={toggle} className="block mx-auto my-3 text-lg font-bold">
                                                { !isOpened ? 
                                                    <span>+ Ver mais itens de série</span>
                                                    :
                                                    <span>- Ver menos itens de série</span>
                                                }
                                            </button>

                                            <div className="pb-5">
                                                <button id="1" data-contentkey="life" onClick={modalOpen} className="flex w-7/12 py-3 mx-auto mb-3 bg-black">
                                                    <span className="mx-auto text-xs font-bold text-white uppercase">
                                                        + Especificações
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* Zen */}
                                    <SwiperSlide>
                                        <div className="bg-white">
                                            <img src="https://www.renault.com.br/agg/vn/unique/ONE_CF_DACIA_NEQ_DENSITY1_LARGE/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FBB1%2Fkwid%2Fc%2FA-OV369-ENS_0MDL2P1SERIELIM1_-OV369" className="w-5/6 mx-auto h-2/4" />
                                            <h5 className="text-3xl font-extrabold text-center uppercase ">Zen 1.0</h5>
                                            <h6 className="mb-5 text-base font-thin text-center text-gray-400">A partir de R$ 59.890</h6>
                                            <ul className="px-20 lg:px-12 xl:px-16 2xl:px-28">
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Estofamento Zen</span>
                                                </li>
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Bancos em tecido</span>
                                                </li>
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Tomada 12V</span>
                                                </li>
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Apoio de cabeça traseiro central e laterais com ajustes de altura</span>
                                                </li>
                                                <div className="transition-all duration-150" style={{ display: isShowing ? "block" : "none", padding: "5px" }}>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Ar-condicionado</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Banco rebatível 1/1</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Vidro dianteiros elétricos</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Retrovisores e maçanetas pretos</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Alerta sonoro e visual do uso do cinto de segurança do motorista e passageiro</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">ABS</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Cinto de segurança central traseiro subabdominal</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">2 Airbags laterais</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Travamento central das portas</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Sistema imobilizador do motor</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Sistema CAR - Travamento automático a 6km/h</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">2 Isofix</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Cintos de segurança dianteiros retráteis de 3 pontos com regulagem de altura</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">2 Airbags frontais</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Indicador de troca de marcha</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Direção elétrica</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Desembaçador do vidro traseiro</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Câmbio manual de 5 velocidades</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Limpador do vidro traseiro</span>
                                                    </li>
                                                </div>
                                            </ul>

                                            <button onClick={toggle} className="block mx-auto my-3 text-lg font-bold">
                                                { !isOpened ? 
                                                    <span>+ Ver mais itens de série</span>
                                                    :
                                                    <span>- Ver menos itens de série</span>
                                                }
                                            </button>

                                            <div className="pb-5">
                                                <button id="2" data-contentkey="zen" onClick={modalOpen} className="flex w-7/12 py-3 mx-auto mb-3 bg-black">
                                                    <span className="mx-auto text-xs font-bold text-white uppercase">
                                                        + Especificações
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* Intense */}
                                    <SwiperSlide>
                                        <div className="bg-white">
                                            <img src="https://www.renault.com.br/agg/vn/unique/ONE_CF_DACIA_NEQ_DENSITY1_LARGE/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FBB1%2Fkwid%2Fc%2FA-OV369-ENS_0MDL2P1SERIELIM1_-OV369" className="w-5/6 mx-auto h-2/4" />
                                            <h5 className="text-3xl font-extrabold text-center uppercase ">Intense 1.0</h5>
                                            <h6 className="mb-5 text-base font-thin text-center text-gray-400">A partir de R$ 61.590</h6>
                                            <ul className="px-20 lg:px-12 xl:px-16 2xl:px-28">
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Roda Intense</span>
                                                </li>
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Estofamento Connect</span>
                                                </li>
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Banco em tecido</span>
                                                </li>
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Computador de bordo multifunções</span>
                                                </li>
                                                <div className="transition-all duration-150" style={{ display: isShowing ? "block" : "none", padding: "5px" }}>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Tomada 12V</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Apoio de cabeça traseiro central e laterais com ajuste de altura</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Banco rebatível 1/1</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Ar-condicionado</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Vidros dianteiros elétricos</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Faróis de neblina</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Alerta sonoro e visual do uso do cinto de segurança do motorista e passageiro</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">ABS</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Cinto de segurança central traseiro subabdominal</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">2 Airbags laterais</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Travamento central das portas</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Sistema imobilizador do motor</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Sistema CAR - Travamento automático a 6km/h</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">2 Isofix</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Cinto de segurança dianteiros retráteis de 3 pontos com regulagem de altura</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">2 Airbags frontais</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Indicador de troca de marcha</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Direção elétrica</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Desembaçador do vidro traseiro</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Câmbio manual de 5 velocidades</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Limpador de vidro traseiro</span>
                                                    </li>
                                                </div>
                                            </ul>

                                            <button onClick={toggle} className="block mx-auto my-3 text-lg font-bold">
                                                { !isOpened ? 
                                                    <span>+ Ver mais itens de série</span>
                                                    :
                                                    <span>- Ver menos itens de série</span>
                                                }
                                            </button>

                                            <div className="pb-5">
                                                <button id="3" data-contentkey="intense" onClick={modalOpen} className="flex w-7/12 py-3 mx-auto mb-3 bg-black">
                                                    <span className="mx-auto text-xs font-bold text-white uppercase">
                                                        + Especificações
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* Outsider */}
                                    <SwiperSlide>
                                        <div className="bg-white">
                                            <img src="https://www.renault.com.br/agg/vn/unique/ONE_CF_DACIA_NEQ_DENSITY1_LARGE/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FBB1%2Fkwid%2Fc%2FA-OV369-ENS_0MDL2P1SERIELIM1_-OV369" className="w-5/6 mx-auto h-2/4" />
                                            <h5 className="text-3xl font-extrabold text-center uppercase ">Outsider 1.0</h5>
                                            <h6 className="mb-5 text-base font-thin text-center text-gray-400">A partir de R$ 62.990</h6>
                                            <ul className="px-20 lg:px-12 xl:px-16 2xl:px-28">
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Bancos exclusivos Outsider</span>
                                                </li>
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Bancos em tecido</span>
                                                </li>
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Computador de bordo multifunções</span>
                                                </li>
                                                <li className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="ml-2 text-sm font-normal">Tomada 12V</span>
                                                </li>
                                                <div className="transition-all duration-150" style={{ display: isShowing ? "block" : "none", padding: "5px" }}>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Apoio de cabeça traseiro central e laterais com ajuste de altura</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Banco rebatível 1/1 </span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Ar-condicionado</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Vidros dianteiros elétricos</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Marcação Outsider nas laterais</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Faróis de neblina</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Alerta sonoro e visual do uso do cinto de segurança do motorista e passageiro</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">ABS</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Cinto de segurança central traseiro subabdominal</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">2 Airbags laterais</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Travamento central das portas</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Sistema imobilizador do motor</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Sistema CAR - Travamento automático a 6km/h</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">2 Isofix</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Cintos de segurança dianteiros retráteis de 3 pontos com regulagem de altura</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">2 Airbags frontais</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Indicador de troca de marcha</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Direção elétrica</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Desembaçador do vidro traseiro</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Câmbio manual de 5 velocidades</span>
                                                    </li>
                                                    <li className="inline-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="ml-2 text-sm font-normal">Limpador do vidro traseiro</span>
                                                    </li>
                                                </div>
                                            </ul>

                                            <button onClick={toggle} className="block mx-auto my-3 text-lg font-bold">
                                                { !isOpened ? 
                                                    <span>+ Ver mais itens de série</span>
                                                    :
                                                    <span>- Ver menos itens de série</span>
                                                }
                                            </button>

                                            <div className="pb-5">
                                                <button id="4" data-contentkey="outsider" onClick={modalOpen} className="flex w-7/12 py-3 mx-auto mb-3 bg-black">
                                                    <span className="mx-auto text-xs font-bold text-white uppercase">
                                                        + Especificações
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                        </Swiper>
                    </div>
                    <div className="relative block pt-10 px-28 sm:px-52 md:hidden">
                        <button onClick={() => swipe?.slidePrev()} className="p-1 mr-5 bg-black">
                            <svg className="w-12 h-12 transition-all duration-200 ease-out transform rotate-90" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <button onClick={() => swipe?.slideNext()} className="p-1 bg-black">
                            <svg className="w-12 h-12 transition-all duration-200 ease-out transform -rotate-90" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </div>
                </div>
                <div className="relative">
                        <svg width="75" height="535" viewBox="0 0 75 535" className="absolute" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ top: '-280px' }}>
                            <path d="M-5.82697 267.5L-148.828 535H-187.998L-331 267.5L-188.62 0H-148.207L-290.587 267.5L-168.724 497.052L-46.8622 267.5L-117.741 133.75L-97.2236 95.8023L-5.82697 267.5ZM-66.7581 0H-107.793L-249.551 267.5L-158.155 439.198L-138.259 401.25L-209.138 267.5L-87.2757 37.3256L34.5865 267.5L-107.793 535H-66.7581L75 267.5L-66.7581 0Z" fill="white"/>
                        </svg>
                    </div>
            </section>

            <section className="hidden w-full px-8 py-12 md:py-20 bg-whitexl:px-0 md:block">
                <h2 className="mb-10 text-4xl font-extrabold text-center uppercase">Descubra tudo sobre o Kwid</h2>
                <div className="flex flex-col px-3 mx-auto max-w-7xl md:px-0 lg:px-8 xl:px-0 md:flex-row">
                    <Tab.Group vertical>
                        <div className="w-full pr-5 mb-6md:mb-0 md:space-y-4 md:w-4/12 xl:pr-12">
                        <Tab.List>
                            {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                classNames(
                                    'py-2 text-xl font-bold cursor-pointer lg:text-2xl transition-all uppercase',
                                    'focus:outline-none px-5',
                                    selected
                                    ? 'bg-white font-extrabold border-l-4 border-l-yellow-300'
                                    : 'text-gray-400 hover:bg-white/[0.12] '
                                )
                                }
                            >
                                {category}
                            </Tab>
                            ))}
                        </Tab.List>
                        </div>
                        <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                            key={idx}
                            className={classNames(
                                'bg-white rounded-xl p-3',
                                'focus:outline-none focus:ring-2  ring-white ring-opacity-60'
                            )}
                            >
                            <>
                                {posts.map((post) => (
                                <div key={post.id} className="w-full space-y-6">
                                    <div className="grid grid-cols-3 ">
                                        <div className="col-span-2">
                                            <img src={post.img} className="w-5/6"/>
                                        </div>
                                        <div className="-ml-2">
                                            <span className="text-base text-gray-500 uppercase">{post.subtitle}</span>
                                            <h4 className="pt-3 pb-2 text-3xl font-extrabold">{post.title}</h4>
                                            <p className="text-base text-gray-700">{post.description}</p>
                                            <button className="w-full py-3 my-5 text-lg font-extrabold uppercase" style={{ backgroundColor: '#EFDF00' }}>Consultar as Condições</button>
                                        </div>
                                    </div>

                                </div>
                                ))}
                            </>
                            </Tab.Panel>
                        ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div >
            </section>

            <section className="block py-20 md:hidden">
                <h2 className="mb-3 text-2xl font-extrabold text-center">DESCUBRA TUDO SOBRE O KWID</h2>
                <div className="px-8">
                    <AccordionKwid id="1" title="Conforto" img="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/home-produto/04-porta-malas.jpg.ximg.large.webp/1575392955286.webp" subtitle="Amplo espaço interno" content="Porta-malas de 290L que pode ser expandido para 1100L com os bancos rebatidos: o maior da categoria" />
                    <AccordionKwid id="2" title="Multimídia" img="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/Sistema-Multimiidia-(Apple%20CarPlay).jpg.ximg.large.webp/13acb34845.webp" subtitle="Diversas possibilidades em uma tela" content="O MEDIA Evolution 7' touchscreen tem tecnologias Android Auto e Apple CarPlay, para espelhamento de apps como Spotify, Waze, Google Maps e WhatsApp. Conta ainda como Eco Scoring, Eco Coaching, câmera de ré e bluetooth."/>
                    <AccordionKwid id="3" title="Segurança" img="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/home-produto/01-airbag.jpg.ximg.large.webp/1575392951671.webp" subtitle="Item de série no SUV dos compactos" content="Único da categoria com 4 Airbags, 2 frontais e 2 laterais, o Kwid se destaca. Ele também vem de série com cinto de 3 pontos, além de apoio de cabeça central e 2 pontos ISOFIX nos bancos traseiros, garantindo muito mais segurança para a sua família." />
                    <AccordionKwid id="4" title="Praticidade" img="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/058-KWID-chave-canivete-ambientada.jpg.ximg.large.webp/a0cabc7417.webp" subtitle="Seu dia a dia mais prático" content="A chave-canivete tem várias funções, como travamento e destravamento das portas a distância e abertura do porta-malas, além de esconder a parte metálica quando não está em uso. Já os retrovisores elétricos têm ajuste ágil e preciso, trazendo mais praticidade para o seu dia a dia." />
                    <AccordionKwid id="5" title="Interior" img="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/home-produto/03-espaco-interno-2.jpg.ximg.small.webp/1575392944326.webp" subtitle="Amplo espaço interno" content="No Kwid ninguém fica apertado. Ele tem o maior espaço interno da categoria e muito conforto para motorista e passageiros. Inclusive no banco de trás." />
                    <AccordionKwid id="6" title="Robustez" img="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/home-produto/resize_kwid_outsider_0019_Layer%20Comp%2020.jpg.ximg.small.webp/1575392891722.webp" subtitle="Onde design e robustez se encontram" content="Com design robusto e imponente, é impossível não notar o Kwid passando por aí." />
                </div>
            </section>

            <section className="container px-8 pb-16 mx-auto md:px-20 md:pb-0 md:py-24">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-12 md:grid-rows-6 md:designRobustez">
                    <div className="hidden md:block md:col-span-5 md:row-span-2">
                        <img src="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/home-produto/resize_kwid_outsider_0019_Layer%20Comp%2020.jpg.ximg.small.webp/1575392889013.webp" className="w-full h-full"/>
                    </div>
                    <div className="col-span-2 md:col-span-7 md:row-span-3 md:max-w-2xl">
                        <span className="text-xl text-gray-700">design e robustez</span>
                        <h2 className="mt-2 mb-4 text-2xl font-extrabold uppercase md:text-4xl">Robustez, tecnologia e conforto</h2>
                        <p className="text-sm md:text-base">O Kwid une o design de SUV às melhores características de um compacto: a economia e a praticidade.</p>
                        <button className="px-10 py-3 my-5 text-white bg-black md:my-10">quero o meu</button>
                    </div>
                    <div className="block col-span-1 md:hidden">
                        <img src="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/home-produto/resize_kwid_outsider_0019_Layer%20Comp%2020.jpg.ximg.small.webp/1575392889013.webp" className="w-full h-full"/>
                    </div>
                    <div className="col-span-1 md:col-span-5 md:row-span-2">
                        <img src="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/home-produto/03-espaco-interno-2.jpg.ximg.small.webp/1575392943823.webp" className="w-full h-full" />
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <img src="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/sobre-o-carro/resize_kwid_outsider_0010_Layer%20Comp%2011.jpg.ximg.small.webp/1575392760246.webp" className="w-full h-full" />
                    </div>
                    <div className="col-span-1 md:col-span-4 md:row-span-2">
                        <img src="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/12-20/6.jpg.ximg.small.webp/f60fcaa678.webp" className="w-full h-full" />
                    </div>
                    <div className="hidden md:col-span-3 md:row-span-2">&nbsp;</div>
                    <div className="col-span-1 md:col-span-5 md:row-span-2">
                        <img src="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/12-20/12.jpg.ximg.small.webp/31a40515d1.webp" className="w-full h-full" />
                    </div>
                    <div className="hidden md:col-span-4 md:row-span-2 ">&nbsp;</div>
                </div>
            </section>
                   
            <section className="w-full px-8 py-8 bg-white sm:py-12 md:py-16">
                <h2 className="max-w-5xl mx-auto mb-12 text-2xl font-extrabold text-center uppercase md:text-4xl">DENTRO DO KWID TAMBÉM CABE MUITA CONFORTO E ECONOMIA</h2>
                <div className="mx-auto md:px-10 max-w-7xl">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                            <div className="relative block w-full h-64 overflow-hidden">
                                <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform" src="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/Motor-103-cilindros.jpg.ximg.large.webp/fca96d139d.webp" />
                            </div>
                            <h3 className="block pt-2 text-2xl font-bold text-black hover:text-gray-900">Economia de sobra</h3>
                            <span className="absolute w-20 border-t-2 border-t-black">&nbsp;</span>
                            <p className="w-11/12 pt-4 text-sm">
                                Quando o assunto é economia, o Kwid mostra seu lado compacto. Equipado com motor 1.0 SCe de 3 cilindros tem o menor consumo da categoria: 15,2 km/L com gasolina e 10,5 km/L com etanol, além do menos custo de manutenção. 
                            </p>
                        </div>

                        <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                            <div className="relative block w-full h-64 overflow-hidden rounded">
                                <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform" src="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/Resize_vs01_04.jpg.ximg.large.webp/268adfe54e.webp" />
                            </div>
                            <h3 className="block pt-2 text-2xl font-bold text-black hover:text-gray-900">Espaço: um item de série</h3>
                            <span className="absolute w-20 border-t-2 border-t-black">&nbsp;</span>
                            <p className="w-11/12 pt-4 text-sm">
                                Não é por acaso que o Kwid é o SUV dos compactos. Além de amplo espaço interno, ele tem também o maior porta-malas da categoria com 290 L. É espaço de sobra para você levar o que quiser.                            
                            </p>
                        </div>

                        <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                            <div className="relative block w-full h-64 overflow-hidden rounded">
                                <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform" src="https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/Media%20Evolution%202.jpg.ximg.large.webp/90247f72df.webp" />
                            </div>
                            <h3 className="block pt-2 text-2xl font-bold text-black hover:text-gray-900">Direção Elétrica</h3>
                            <span className="absolute w-20 border-t-2 border-t-black">&nbsp;</span>
                            <p className="w-11/12 pt-4 text-sm">.
                                No Kwid, cada detalhe foi pensado para uma condução mais confortável. Por isso ele vem equipado com direção elétrica, que é muito mais macia e torna as manobras do dia a dia mais fáceis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="accessories" className="px-8 py-20 bg-cover" style={{ background: '#F2F2F2' }}>
                <div className="container mx-auto md:px-10">
                    <div className="container inline-flex mb-10">
                        <div className="inline-flex w-10/12">
                            <svg width="69" height="60" viewBox="0 0 69 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M63.4728 27.75L50.0678 0L55.5482 2.91515e-06L69 27.75L49.6122 60H44L63.4728 27.75Z" fill="black" />
                                <path d="M52.4728 27.75L39.0678 0L44.5482 2.91515e-06L58 27.75L38.6122 60H33L52.4728 27.75Z" fill="black" />
                                <path d="M41.4728 27.75L28.0678 0L33.5482 2.91515e-06L47 27.75L27.6122 60H22L41.4728 27.75Z" fill="black" />
                                <path d="M30.4728 27.75L17.0678 0L22.5482 2.91515e-06L36 27.75L16.6122 60H11L30.4728 27.75Z" fill="black" />
                                <path d="M19.4728 27.75L6.06781 0L11.5482 2.91515e-06L25 27.75L5.61224 60H0L19.4728 27.75Z" fill="black" />
                            </svg>
                            <div className="inline-block">
                                <h2 className="ml-4 text-2xl font-extrabold uppercase md:text-4xl">Seu carro do seu jeito</h2>
                                <span className="ml-4 text-sm text-justify md:text-xl">Personalize seu carro com acessórios que facilitam sua vida</span>
                            </div>
                        </div>
                        <div className="justify-end hidden w-2/12 md:block md:flex-row-reverse">
                            <button onClick={() => swipeAcessories?.slidePrev()} className="p-1 mr-5" style={{ backgroundColor: '#EFDF00' }}>
                                <svg className="w-12 h-12 transition-all duration-200 ease-out transform rotate-90" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <button onClick={() => swipeAcessories?.slideNext()} className="p-1" style={{ backgroundColor: '#EFDF00' }}>
                                <svg className="w-12 h-12 transition-all duration-200 ease-out transform -rotate-90" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                        </div>
                    </div>

                    <div className="container">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            breakpoints={{
                                "0": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 20
                                },
                                "768": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 2
                                },
                                "1024": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 20
                                }
                            }}
                            onBeforeInit={(swipper) => setSwipeAcessories(swipper)}
                        >
                            <SwiperSlide>
                                <div className="py-10 bg-white h-96">
                                    <div className="w-40 h-40 mx-auto border-4 border-black rounded-full">
                                        <svg className="w-20 h-20 mx-auto mt-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.06 284.24"><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path d="M0,141.59Q0,82.13,0,22.66C0,7.32,7.31,0,22.68,0Q84.15,0,145.61,0,168,0,168.06,22.45q0,119.68,0,239.37c0,14.89-7.52,22.39-22.49,22.4q-61.45,0-122.93,0C7.31,284.21,0,276.87,0,261.53Q0,201.56,0,141.59Zm13.3,90.56H154.59V45.73H13.3Zm-.23,13.62c0,5.51,0,10.48,0,15.46,0,8.52,1.61,10.11,10.29,10.11q60.72,0,121.44,0c1.66,0,3.59.32,4.91-.4,1.88-1,4.58-2.79,4.7-4.41.52-6.86.22-13.77.22-20.75Zm.12-213.39h6.35q63.68,0,127.33,0c9.22,0,8.08,1.27,8.13-8.3.05-9.82-1.35-11.17-11.28-11.17H23.88c-1.83,0-4-.44-5.39.38-2.06,1.24-4.7,3.21-5.06,5.23C12.66,22.82,13.19,27.35,13.19,32.38Z"/><path d="M84,264.88c-6,0-12,.07-17.93,0-5.06-.09-7.81-2.4-7.88-6.35s2.81-6.63,7.63-6.68q18.17-.15,36.35,0c4.9,0,7.68,2.67,7.62,6.66s-2.81,6.28-7.87,6.37C96,265,90,264.88,84,264.88Z"/></g></g></svg>
                                    </div>

                                    <div className="w-full text-center">
                                        <h3 className="mt-5 text-2xl font-extrabold">Porta-celular</h3>
                                        <p className="px-10 mt-2 font-light">
                                            Pequeno, leve e com encaixe para qualquer modelo de smartphone
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="py-10 bg-white h-96">
                                    <div className="w-40 h-40 mx-auto border-4 border-black rounded-full">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mx-auto my-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg> */}
                                        <svg className="w-24 h-24 mx-auto mt-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.87 360.6"><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path d="M22.75,112.15V0H173V112c2.1.43,3.88.67,5.57,1.17,11.25,3.35,17.19,11.47,17.23,24,.09,22.83,0,45.66,0,68.49v5.85c24.59-3.85,46.34,1.62,64.84,17.85a72,72,0,0,1,24.11,43.2c6.66,39.7-18.1,75.7-55.67,85.8-33.69,9.06-81-8.92-92.6-57.69h-8.38v44.61H113V300.72H83.13v44.55h-15V300.48c-4.9,0-9.48.15-14,0-8.47-.33-17.19.31-25.33-1.54C11.11,294.89.25,280.4.15,261.59c-.23-41.66-.16-83.32,0-125C.17,122.71,8,114.38,22.75,112.15Zm112.4,173.29c.28-1.44.57-2.38.65-3.35,2.21-28.85,15.79-50.3,41.64-63.65,2.88-1.48,3.43-3.4,3.41-6.34-.1-24.33,0-48.66-.06-73,0-9.46-2-11.52-11.35-11.52h-143c-9.31,0-11.34,2.06-11.34,11.53q0,60,0,120c0,17.63,8.78,26.32,26.53,26.33q44,0,88,0ZM38.1,112.07H157.79V14.83H38.1ZM150.86,285.65a60,60,0,0,0,60,59.94c33.12,0,60.23-27.4,60.07-60.61-.15-33-27.23-59.58-60.49-59.48A59.64,59.64,0,0,0,150.86,285.65Z"/><path d="M82.61,82.27H53.31V60.09h29.3Z"/><path d="M113.11,82.11v-22h29.51v22Z"/><path d="M192.24,326.44c5.79-12.64,11.59-25.28,17.55-38.3H188c.41-1,.63-1.76,1-2.43,6.54-13.09,13.12-26.15,19.59-39.28a3.34,3.34,0,0,1,3.57-2.21c5.29.12,10.58,0,16.41,0L209.9,275.05h23.9l-41.15,51.82Z"/></g></g></svg>
                                    </div>

                                    <div className="w-full text-center">
                                        <h3 className="mt-5 text-2xl font-extrabold">Carregador USB</h3>
                                        <p className="px-10 mt-2 font-light">
                                            Para celulares e tablets
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="py-10 bg-white h-96">
                                    <div className="w-40 h-40 mx-auto border-4 border-black rounded-full">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mx-auto my-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg> */}
                                        <svg className="w-24 h-24 mx-auto mt-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 537.28 322.31"><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path d="M55.58,269c-6.55,0-13.19,0-19.84,0C13.59,268.9,0,255.27,0,233.05q0-34.76,0-69.51C0,133.36,18.66,111.81,48.55,107q23.91-3.82,47.67-8.41A9.45,9.45,0,0,0,102,94.25C113.34,72.58,124.45,50.78,135.54,29,144.87,10.66,160.2,1.67,180.27.24c6-.43,12-.15,18-.15,51.33,0,102.66.08,154,0C370,0,384.67,6.43,396.13,20a30.3,30.3,0,0,1,3.79,5.82c11.64,22.64,23.3,45.27,34.71,68,1.64,3.26,3.77,4.54,7.11,5.16,18.62,3.49,37.37,6.49,55.79,10.89,22.76,5.45,39,26,39.4,49.5.5,25.83.41,51.68.05,77.51-.26,18.52-14.62,31.71-34,32.05-7.15.13-14.3,0-21.69,0-4.12,18.73-13.52,33.64-29.65,44.05-12,7.75-25.2,10.2-39.17,9-23.05-1.95-48.61-19.17-56-52.66h-176c-3.68,17.26-12.31,31.62-27,42-12.07,8.48-25.54,11.55-40.19,10.82C92.85,321.16,64.18,306.15,55.58,269ZM461.9,247.81a9.05,9.05,0,0,1,1.68-.54c13,0,26,0,39-.1,9.12,0,12.89-3.61,12.93-12.67.1-24,.26-48,0-72-.23-18-10.22-29.69-27.87-33.15q-29.86-5.86-59.84-11.2c-3.91-.69-6-2.39-7.73-5.82-12.11-23.9-24.64-47.59-36.56-71.59-6.45-13-16.81-19.08-30.75-19.12q-84.25-.22-168.53,0c-13.94,0-24.22,6.3-30.65,19.27-12.11,24.46-24.76,48.66-37.36,72.88a8.24,8.24,0,0,1-4.9,4c-19.8,3.63-39.65,7-59.5,10.36C33.34,131.27,22.3,142.22,21.84,160c-.65,25.33-.34,50.68-.18,76,.05,7.38,4.24,11,11.88,11.13,12,.13,24,0,36,0h5.18c.53,7.18.33,13.78,1.6,20.08,3.94,19.56,22.54,34.08,42.27,33.6,21.55-.51,39-15.85,41.81-37,.71-5.38.66-10.86,1-16.32H375.87c-3.43,35.82,21.24,53,42.66,53.23a42.16,42.16,0,0,0,29.93-11.71C460.53,277.85,462.59,263.28,461.9,247.81Z"/><path d="M226,118.14c0-9-.38-17.15.08-25.28,1-17.28,15.39-32.35,32.17-37.1C285.83,47.94,312,70.22,311.61,99c-.09,6.15,0,12.3,0,19.18,2.95,0,5.56,0,8.15,0,8.8.19,13.27,4.59,13.29,13.24q.06,30,0,60c0,8.39-4.24,12.77-12.56,12.79q-52,.1-104,0c-8.23,0-12.41-4.46-12.43-12.91q-.08-30,0-60c0-8.56,4.34-12.86,12.91-13.1C219.59,118.07,222.22,118.14,226,118.14Zm64-.21c0-7.89.44-15.37-.1-22.78a21.52,21.52,0,0,0-20.69-19.88,20.86,20.86,0,0,0-21.55,18.24c-1,8-.19,16.14-.19,24.42Z"/></g></g></svg>
                                    </div>

                                    <div className="w-full text-center">
                                        <h3 className="mt-5 text-2xl font-extrabold"> Módulo One Touch</h3>
                                        <p className="px-10 mt-2 font-light">
                                        Com um botão, você trava as portas, fecha os vidros e aciona o alarme ao mesmo tempo
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="py-10 bg-white h-96">
                                    <div className="w-40 h-40 mx-auto border-4 border-black rounded-full">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mx-auto my-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg> */}
                                        <svg className="w-24 h-24 mx-auto mt-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644.77 489.78"><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path d="M360.83,55.29c13.43,6.24,26.56,10.94,38.23,18,33.65,20.48,54,50.9,61.52,89.38,2.69,13.78,3.35,28.08,3.62,42.17.61,32.31.18,64.64.62,97,.21,15.62,6.38,29.79,12.51,43.85,8.78,20.14,21.82,37.71,33.77,55.94A46.79,46.79,0,0,1,514,406.3c4.75,9.51-1.06,19-11.76,19q-54.73.07-109.47,0h-5.68c-.9,20.5-8.64,37.38-24.4,50.2C350.28,485.6,336,490,320.05,489.77c-28.95-.33-61-24.19-62.44-64.45h-5.26c-36.16,0-72.31-.07-108.47.07-5.87,0-10.49-1.63-13.45-6.76-3.08-5.33-1.31-10.23,1.69-15,10.12-16,20.77-31.79,30.15-48.25a144.68,144.68,0,0,0,17.16-49.76,103.41,103.41,0,0,0,.8-15.45c.07-30.66,0-61.32.05-92,.05-19.07,2.17-37.87,8.49-56,15-43,44.17-71.27,88.12-83.71,5.24-1.49,7.05-3.39,6.95-8.93-.14-7.57-.07-15.48,1.9-22.7C290.73,8.51,309-2.23,328.92.39c16.65,2.19,31.19,18.47,31.87,36C361.05,43.16,360.83,50,360.83,55.29ZM166.26,399.14h311.9c-4.77-7.63-9.35-14.7-13.66-21.93-17.47-29.34-27.64-60.53-26.43-95.27,1-27.47.41-55,.08-82.49-.13-10.45-.55-21.07-2.5-31.29-8.15-42.81-32-72.55-74.46-85.4C331.9,73.89,302.28,74.42,274,86c-43.28,17.75-64.86,52.06-66.95,97.88-1.62,35.42-.35,71-.86,106.46A168.09,168.09,0,0,1,203,320.52c-4.88,24.51-16.24,46.35-29.34,67.37C171.36,391.5,169,395,166.26,399.14Zm194.33,26.5H284c-.84,20.44,17.81,38.88,38.57,38.46C343.78,463.68,361.55,445.85,360.59,425.64ZM335.26,51.9c0-3.84,0-7.64,0-11.44A30.61,30.61,0,0,0,334.9,36a12.94,12.94,0,0,0-11.84-10.39c-5.28-.41-11.9,3.35-12.79,8.45-1,5.91-.79,12-1.09,17.86Z"/><path d="M578.45,57.66l21.23-13c29.12,47.44,43.46,98.83,45,153.94,1.82,66.34-18.79,129.26-45.3,168.77l-20.87-12.8C632.69,255.51,632.78,156.87,578.45,57.66Z"/><path d="M45.24,44.85c7.23,4.44,14.17,8.69,20.91,12.84C11.88,156.6,11.9,255.16,66.08,354.44c-3,1.87-6.64,4.14-10.28,6.39s-7,4.31-10.57,6.46C-14.63,275.74-15.53,138.5,45.24,44.85Z"/><path d="M543.88,332.8c-1.33-.71-2.37-1.2-3.36-1.78-6.14-3.66-12.27-7.33-18.26-10.92,42.08-75.83,43.87-151.41.09-227.73l21.11-13.22C588.94,147.39,595.6,249.25,543.88,332.8Z"/><path d="M122.25,320l-21.17,12.74c-43.9-68-53.4-169.46-.32-253.75L122.28,92.4C78.38,168.31,80.29,244,122.25,320Z"/></g></g></svg>
                                    </div>

                                    <div className="w-full text-center">
                                        <h3 className="mt-5 text-2xl font-extrabold">Alarme</h3>
                                        <p className="px-10 mt-2 font-light">
                                            Mais segurança contra furtos de objetos
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="py-10 bg-white h-96">
                                    <div className="w-40 h-40 mx-auto border-4 border-black rounded-full">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mx-auto my-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg> */}
                                        <svg className="w-20 h-20 mx-auto mt-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310.32 232.52"><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path d="M154.81,232.5q-65.73,0-131.45,0c-5.78,0-11.38-.59-16-4.34A18.62,18.62,0,0,1,0,213Q0,128.8,0,44.58A19.07,19.07,0,0,1,19.25,25.65c17.65-.07,35.32-.2,53,.11,4.32.07,6.89-1.59,9-4.81,2.95-4.42,5.82-8.9,8.86-13.27C93.68,2.56,98.38.1,104.91.14c32,.2,64,.47,96-.13,10-.19,17.36,3,21.24,11.5,5.57,12.22,14.34,15.44,27.08,14.37,13.4-1.13,27-.27,40.46-.24,10.75,0,18.57,7,19.81,17.67a109.92,109.92,0,0,1,.82,12.43q.08,73.71,0,147.43a117.29,117.29,0,0,1-1,13.89c-.82,6.6-7.47,13.32-14.61,14.7a49.61,49.61,0,0,1-9.44.71Q220,232.55,154.81,232.5Zm.05-12.8q65.23,0,130.46,0c9.9,0,12-2.16,12-12q0-18.5,0-37,0-59.22,0-118.46c0-12.39-1.11-13.53-13.2-13.53-16.16,0-32.32-.1-48.48,0-7.11.06-12.55-2.52-16.41-8.51-2.61-4.05-5.47-7.95-8-12-2.31-3.77-5.24-5.33-9.83-5.29-28,.2-56,.76-84-.21-11.9-.42-19.31,2.94-24.37,13.7-4.25,9-11.85,12.93-22.38,12.5-16.46-.68-33-.21-49.47-.17-6.29,0-8.39,2.07-8.39,8.41q-.06,81.74,0,163.45c0,6.54,1.95,8.51,8.59,9,1.82.15,3.66.11,5.5.11Q90.89,219.72,154.86,219.7Z"/><path d="M187,157l-59.2-.63c-1.06,5.36-2.71,10.37-6.59,14.31-7.4,7.54-16.36,10.9-26.59,8-9.8-2.8-15.93-9.88-18.29-19.86-.51-2.17-1.27-2.92-3.39-2.71a42,42,0,0,1-5.5.1c-7.17-.25-12.09-5-12-12.14.17-14.37.42-28.74,1.12-43.09A26.2,26.2,0,0,1,59.9,90.07C64.68,81.36,70,73,75.09,64.41,79.58,56.88,86.3,53.16,95,53.2q30,.13,59.9.5a22.21,22.21,0,0,1,16.76,7.21q14.38,15.45,29,30.73a6.21,6.21,0,0,0,3.89,1.75c9.44.27,18.9.76,28.32.34A22,22,0,0,1,255.28,116c0,9.35-.05,18.71-.3,28.06-.22,8.16-5.4,13.06-13.7,13.26-1.5,0-2.71,0-3.17,2-2.88,12.74-14.9,20.09-25.93,19.94-12.49-.17-22.27-8.89-24.94-21.69A4.19,4.19,0,0,0,187,157Zm-59.63-9.29,59.4.51c.18-.68.27-1,.32-1.24,2.34-11.21,12.79-19.7,24.85-20.16,11.81-.45,23,7.57,26,18.61.86,3.16,2.66,4.12,5.61,2.81,2.26-1,2.74-3.05,2.76-5.3.06-8.87.2-17.74.17-26.62,0-8.49-5.22-13.67-13.71-13.76q-64.77-.65-129.55-1.24L65.14,101c-.33,14.52-.7,28.88-1,43.24a3,3,0,0,0,3.31,3.25c2.79,0,5.58-.09,8.33-.15,3.89-14.47,16.78-21.2,28.85-20C114.64,128.3,124.1,135.21,127.36,147.71Zm3.44-85.46c-.07,10.19-.15,20.18-.23,30.48l59.59.51c-8.94-9.46-17.31-18.33-25.71-27.18-2.48-2.61-5.7-3.53-9.19-3.58C147.26,62.36,139.26,62.32,130.8,62.25Zm-62.23,30,53.22.36c.08-10.31.15-20.3.22-30.56-9.81,0-19.35-.24-28.87,0-4.49.11-8,2.57-10.37,6.47C78.15,76.22,73.55,83.92,68.57,92.26Zm160,53.11a17.48,17.48,0,0,0-23.3-8.22c-8.9,4.26-12.38,14.25-8.1,23.25s14.12,12.48,23.41,8A17.05,17.05,0,0,0,228.55,145.37ZM94,137.85c-9.22,4.66-12.37,14.08-7.73,23.14s14.12,12.32,23.18,7.81,12.27-14.53,7.74-23.53A17,17,0,0,0,94,137.85Z"/></g></g></svg>
                                    </div>

                                    <div className="w-full text-center">
                                        <h3 className="mt-5 text-2xl font-extrabold">Câmera de ré</h3>
                                        <p className="px-10 mt-2 font-light">
                                            Permite uma vista ampla da parte de trás, dando mais segurança em manobras.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="py-10 bg-white h-96">
                                    <div className="w-40 h-40 mx-auto border-4 border-black rounded-full">
                                        <svg className="w-24 h-24 mx-auto mt-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 553.4 322.44"><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path d="M415.88,284.61v16.7H398.67v-16.7h-6.76q-93,0-186,0c-10.21,0-19.31-2.49-27.17-9.32a32.29,32.29,0,0,1-10.14-16.82c-5.73-22-9.38-44.35-9.73-67-.38-23.63-.51-47.35,1.21-70.88,1.29-17.48,4.91-34.92,9-52,3.83-16.2,17.85-25,36.5-25q93,0,186,0h7.08V26.85H416V43.52h6.38c23,0,46-.05,69,0,19.22.06,35.08,7.05,46.18,23.2,6.39,9.31,8.26,20.2,10.13,31a380.36,380.36,0,0,1,2.88,112.46c-1.92,15.43-2.87,31.3-10,45.59-8.37,16.81-22.32,27-40.88,27.94-25.43,1.29-51,.66-76.45.84C420.93,284.63,418.66,284.61,415.88,284.61ZM533.45,207a336.29,336.29,0,0,0-.06-86.11H510.8V70L516,68.85C509.08,62.69,501.44,61,493.29,61c-29.32,0-58.65-.07-88,.08a11.91,11.91,0,0,0-6.7,2.38c-12.07,9.44-23.87,19.23-36,28.6a15,15,0,0,1-8.42,3.06q-33,.38-66,0a14.36,14.36,0,0,1-8-2.91c-12.11-9.39-23.92-19.16-36-28.58a12.94,12.94,0,0,0-7.12-2.54c-10.82-.27-21.66-.15-32.49-.11-11.6,0-17,4.34-19.89,15.58-7.42,28.58-9.41,57.74-9.42,87.11,0,29.7,1.93,59.2,9.45,88.1,2.84,10.95,8.31,15.37,19.52,15.42,11,.06,22,.14,33-.09a12,12,0,0,0,6.69-2.34c12.34-9.64,24.43-19.6,36.77-29.23a12.68,12.68,0,0,1,7.16-2.49q33.48-.28,67,0a12.59,12.59,0,0,1,7.13,2.54q17.94,14,35.49,28.44a13.74,13.74,0,0,0,9.51,3.25c19-.14,38-.06,57-.07,10.66,0,21.33.17,32-.15,7.28-.22,14.14-2.11,20-7.94l-5-.88V207Zm-160-145.62H269.2c7,5.62,13.15,10.69,19.48,15.52A8.08,8.08,0,0,0,293.31,78q28,.12,55.94,0a9.62,9.62,0,0,0,5.44-1.69C360.79,71.71,366.68,66.81,373.46,61.37ZM373.69,267c-6.74-5.42-12.33-10.16-18.21-14.51a12.34,12.34,0,0,0-6.72-2.29c-18.31-.18-36.62-.11-54.93-.08-1.47,0-3.32-.19-4.32.58C282.87,255.72,276.41,261,269,267Z"/><path d="M214.3,70.66c15.44,15.44,30.53,30.46,45.49,45.61a6.87,6.87,0,0,1,1.4,4.47q.12,43.46,0,86.91a7.5,7.5,0,0,1-1.91,4.76c-14.5,14.69-29.13,29.25-43.75,43.83a6.14,6.14,0,0,1-1.24.76C197.19,214.86,195.58,119.76,214.3,70.66Zm10,33.16-1.69,1.1c-5.91,39.5-6,79,1,119A237.76,237.76,0,0,0,242.34,205a7.17,7.17,0,0,0,1.42-4.47q.13-36.48,0-73a7.11,7.11,0,0,0-1.43-4.46C236.45,116.58,230.36,110.23,224.34,103.82Z"/><path d="M426.64,72.5c33.51,60.08,28.85,133.67-.35,183.1-8.29-8.27-16.53-16.46-24.73-24.68-5.76-5.78-11.64-11.46-17.12-17.5a11.26,11.26,0,0,1-2.77-6.87q-.29-42.46,0-84.93c0-2.09.69-4.76,2.07-6.17,13.58-14,27.38-27.72,41.13-41.53A20.72,20.72,0,0,1,426.64,72.5Zm-5.23,153.86c15.3-41.85,15.35-82.82-.09-124.72-7.48,7.6-14.43,14.53-21.18,21.65a7.12,7.12,0,0,0-1.38,4.49q-.12,36.24,0,72.47a7.64,7.64,0,0,0,1.67,4.86C407.09,212.09,414,218.87,421.41,226.36Z"/><path d="M45.24,0,66.15,12.84c-54.27,98.91-54.25,197.47-.07,296.75-3,1.87-6.64,4.14-10.28,6.39s-7,4.31-10.57,6.46C-14.63,230.89-15.53,93.65,45.24,0Z"/><path d="M122.25,275.16l-21.17,12.73c-43.9-68-53.4-169.45-.32-253.75l21.52,13.41C78.38,123.46,80.29,199.18,122.25,275.16Z"/></g></g></svg>
                                    </div>

                                    <div className="w-full text-center">
                                        <h3 className="mt-5 text-2xl font-extrabold">Sensor de estacionamento</h3>
                                        <p className="px-10 mt-2 font-light">
                                            Em qualquer manobra, alerta o motorista com precisão, garantindo a segurança.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="py-10 bg-white h-96">
                                    <div className="w-40 h-40 mx-auto border-4 border-black rounded-full">
                                        <svg className="w-24 h-24 mx-auto mt-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 493.99 493.97"><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path d="M246.87,494C110.65,494-.34,383,0,246.58S109.81,1.33,243.56,0C384.82-1.38,494.27,111.87,494,247.33,493.7,384.24,382.84,493.83,246.87,494Zm.54-472.56c-124.12,0-225.59,100.66-226,223.6C21,370.8,120.89,470.44,243.1,472.39c127.16,2,228.89-99.71,229.32-224.08C472.86,122.64,372.15,21.43,247.41,21.41Z"/><path d="M65.53,246.78C65.53,146.45,147.6,64.21,248,64.52c103.35.31,184.06,85,182.56,185.24C429.09,348.68,347.2,430.21,246,429.56,147.19,428.93,65.53,346.74,65.53,246.78ZM192.38,294c8,.76,26.07,10.15,33.1,13.42,5.26,2.44,7.89,5.89,8.11,11.86.85,23.61,2,47.22,3.1,70.83.27,5.75.75,11.49,1.14,17.28h18.53c.4-7.21.8-14,1.15-20.77,1.15-22.27,2.42-44.54,3.34-66.82.29-7,3.5-10.74,9.79-13.35a73.7,73.7,0,0,0,15.94-9.08c5.77-4.37,10.9-5.09,17.34-1.42,17.33,9.87,34.89,19.33,52.37,28.93,7.8,4.3,15.63,8.54,23.77,13l9.85-16.7c-2.07-1.41-3.57-2.44-5.08-3.45-22.35-15.07-44.61-30.28-67.13-45.09-6.09-4-8.29-8.57-7.36-15.83a78.82,78.82,0,0,0,0-20.3c-.95-7.17,1.56-11.51,7.38-15.32,19.36-12.65,38.49-25.64,57.7-38.51,4.79-3.22,9.55-6.49,14.66-9.95l-9.87-16.44c-26.18,14.25-51.76,28.1-77.26,42.11-5.5,3-10.12,2.49-15.24-1.12a102.56,102.56,0,0,0-17.6-10.18c-5.9-2.6-8.93-6.23-9.19-12.72-.64-16.13-1.55-32.25-2.38-48.37-.68-13.09-1.39-26.18-2.1-39.58H237.69c-.09,1.26-.17,2.07-.21,2.88-1.33,28.42-2.74,56.85-3.9,85.28-.25,5.94-2.9,9.29-8.13,11.84a147.85,147.85,0,0,0-19.75,11.41c-5.15,3.57-9.62,4.14-15.16,1-14.81-8.26-29.81-16.19-44.73-24.23l-32.68-17.57-9.44,16.42c1.66,1.19,2.84,2.09,4.07,2.91,23.12,15.42,46.19,30.92,69.41,46.19,5,3.32,7,7.29,6.49,13.36a122.42,122.42,0,0,0,0,21.32c.58,6.44-1.46,10.63-6.85,14.17-23,15-45.75,30.38-68.59,45.62-1.47,1-2.87,2-4.59,3.28l9.58,16.29L192.38,294m206.18,7c12.51-36.32,12.61-71.82,0-107.92-8.85,5.93-17.07,11.28-25.05,16.95a5.71,5.71,0,0,0-1.72,4.86,129.54,129.54,0,0,1-.12,64.13c-.34,1.33,0,3.7.84,4.32C380.92,289.26,389.48,294.9,398.56,301Zm-303.5-1c9-6,17.47-11.56,25.74-17.34a4.7,4.7,0,0,0,1.29-4.09,130.21,130.21,0,0,1,0-63.14c.3-1.19,0-3.32-.8-3.87C112.72,205.63,104,199.92,95,193.93,83,229.5,83,264.31,95.06,300Zm31.71-160C135.71,144.79,144,149,152,153.7c3,1.74,4.74,1.31,7.3-.8,6.64-5.5,13.14-11.43,20.58-15.63,10.9-6.14,22.56-10.92,35-16.81V89.13C180.22,96.34,151.2,113.35,126.77,140Zm89.1,265c-.52-11.71-1-22.47-1.47-33.37A130.48,130.48,0,0,1,156,338.13L126.8,353.89C151,380.45,180.12,397.41,215.87,404.91Zm63.95-282.64a131.51,131.51,0,0,1,55.68,31c.78.72,2.61,1.3,3.4.89,9.18-4.82,18.25-9.84,27.62-15C342.2,113,313.39,96.26,278.24,89,278.79,100.52,279.3,111.27,279.82,122.27Zm-1.59,282.62c35.08-7.35,63.86-23.91,87.95-50-8.63-4.75-16.7-9-24.56-13.62-3.21-1.88-5.14-1.61-8.17.8-7.9,6.29-15.92,12.65-24.68,17.59-9,5.09-19,8.53-29,12.88C279.28,382.59,278.77,393.34,278.23,404.89ZM351.84,224.4c-6.5,4.34-14.62,7-17.6,12.51s-2.82,14.77.12,20.11c3,5.49,11.09,8.21,17.39,12.44C355.27,254.38,355.11,240,351.84,224.4ZM176,166.54c6.87,3.68,13,7,19.13,10.18,1,.54,2.7,1,3.59.52,4.12-2.1,8.12-4.47,12-6.92a4,4,0,0,0,1.61-2.78c.13-7.26.07-14.51.07-22.09C199.23,149.68,187.29,156.72,176,166.54Zm37.41,182.14c-.18-3.91-.88-7.28-.4-10.47,1.66-10.91-3.36-17.34-13.12-20.95-1-.38-2.4-1.28-3.1-.93-6.84,3.48-13.56,7.17-20.73,11C187.45,337.12,199.29,344.19,213.37,348.68ZM142,225.2a100,100,0,0,0,.07,43.46c6.28-4.19,14.1-6.94,17.48-12.42,2.87-4.65,2.91-13.87.05-18.52C156.2,232.22,148.37,229.47,142,225.2ZM317.34,166a104.85,104.85,0,0,0-36.28-20.68c.44,7.84.76,15.11,1.35,22.36a5.24,5.24,0,0,0,2.21,3.37,89.58,89.58,0,0,0,9.52,5.44,4.48,4.48,0,0,0,3.53.12C304.13,173.22,310.48,169.68,317.34,166ZM281.1,348c10.29-1.76,30.67-13.6,35.33-20.42-3.05-1.69-6.38-3-9.08-5.12-7.36-5.75-14.51-6.69-21.83-.14-.12.11-.37.08-.45.2-.95,1.35-2.57,2.66-2.7,4.1C281.73,333.69,281.49,340.79,281.1,348Z"/><path d="M289.74,244.84c1.84,21.55-16.17,42.57-37.53,44.72-26.84,2.7-45.54-17.52-47.79-37.3a43.14,43.14,0,0,1,37.13-47.9C269.54,201.07,289.66,223.61,289.74,244.84ZM247,225.42a21.5,21.5,0,1,0,21.47,21.67A21.66,21.66,0,0,0,247,225.42Z"/></g></g></svg>
                                    </div>

                                    <div className="w-full text-center">
                                        <h3 className="mt-5 text-2xl font-extrabold">Roda de liga leve 14"</h3>
                                        <p className="px-10 mt-2 font-light">
                                            Beleza e esportividade em qualquer ocasião.                                        
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="py-10 bg-white h-96">
                                    <div className="w-40 h-40 mx-auto border-4 border-black rounded-full">
                                        <svg className="w-24 h-24 mx-auto mt-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288.1 290.6"><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path d="M96,161.3c11.7-12,25.56-19.07,42.37-20.11,17.34-1.08,32.91,3.91,45.23,16C205.94,179,222,204.69,227.51,236c2.11,12.1,1.42,23.83-5.38,34.62-9.12,14.5-22.48,20.54-39.24,19.89a53.56,53.56,0,0,1-25.46-8c-11.68-7-23.05-6.61-35.06-.49-15.55,7.95-31.62,10.12-47.69,1.07-16.23-9.15-22-23.86-21-41.56,1.22-22.6,11-41.92,24.57-59.45C83.81,175,90.07,168.24,96,161.3Zm84.76,11.51c-22.88-23.92-52-24.57-73.78-3.58A188.66,188.66,0,0,0,92.42,185c-13,15.73-22.92,32.94-25.68,53.65-2.39,17.94,5.49,31.79,21.37,36.18,9.41,2.6,18.62,1,27.05-3.55,16.2-8.77,32.2-9.62,48.38-.18a63,63,0,0,0,7.11,3.58c13.9,5.9,28.34,3.33,37.63-6.77,8-8.72,8.19-19.14,6.29-30C210,211.54,196.38,190,180.79,172.81Z"/><path d="M67.43,10.86c13-12.62,28.49-13.93,40.72-5.54C127,18.23,133.58,37.43,135.1,58.89c1,14.61-1.73,28.52-11.54,40.17-11.87,14.07-29.7,15.77-43.81,4.19-17.68-14.5-24-34-24.21-56C55.39,32.66,59.4,19.38,67.43,10.86ZM112.16,93c1.8-2.77,4-5.36,5.32-8.33,6.89-15.07,6.08-30.41.55-45.59-3.15-8.64-7.79-16.41-15.51-22-9.1-6.64-20-5.38-26.25,3.7a37.21,37.21,0,0,0-5.16,10.69c-6,21-2.22,40.3,11.71,57C91.47,98.88,103.13,101.46,112.16,93Z"/><path d="M225.41,13.73c7.63,8.82,11,21.71,10.63,35.49-.52,18.43-6,35.2-18.5,49.33s-29.4,18.26-43.16,9.66c-10.69-6.68-16-17.31-17.87-29.34-3.81-25,2.34-47.57,20.17-65.59C190.61-.79,209.79-2.59,225.41,13.73Zm-46.8,81.42c5.11,5.42,12.34,6.35,20.65,1.66A39.22,39.22,0,0,0,215,79.88c9-17.74,11.69-36,2.45-54.53-4.74-9.53-14.52-12.87-24-8.15a29.36,29.36,0,0,0-8.8,6.41c-13.18,14.77-18.12,32.2-15.42,51.71C170.15,82.09,172.2,88.63,178.61,95.15Z"/><path d="M57.6,99.85c13.57,15.33,21.2,30.59,19.94,48.93-1.63,23.72-21.21,34.93-42.76,25C14.18,164.22-1.65,137.21.14,114.64,2.09,90,24.07,78.5,45.61,91,50.58,93.91,54.94,97.86,57.6,99.85Zm-7.22,9.94c-5.49-3.26-10.71-7.17-16.53-9.62C26,96.84,18.29,100,15.4,107a25.2,25.2,0,0,0-2,8.67c-.51,18.82,7.91,33.32,22.81,44,5.83,4.19,12.85,7.16,20.08,3.15,7.4-4.11,8.46-11.54,8.11-19.1C63.79,131,58.58,120.09,50.38,109.79Z"/><path d="M267,167.11c-6.44,6.55-14,11.21-23,13.19-18,4-32.61-6.57-34.76-24.93-3-25.35,18.34-56.86,42.87-63.4,18.58-5,34.8,6.75,35.94,25.91C289.05,135.47,281.46,153.25,267,167.11Zm-8.39-8.25-.55-1.05c.84-.8,1.74-1.56,2.52-2.42,8.92-9.84,14.45-21.13,14.27-34.66-.19-14.13-10.17-20.86-22.89-14.92a52.59,52.59,0,0,0-14.86,10.62c-10.06,10.26-15.67,22.68-14.53,37.4.87,11.34,9.18,17.14,19.92,13.43C248.12,165.31,253.23,161.71,258.58,158.86Z"/></g></g></svg>
                                    </div>

                                    <div className="w-full text-center">
                                        <h3 className="mt-5 text-2xl font-extrabold">Cadeira Pet</h3>
                                        <p className="px-10 mt-2 font-light">
                                            Para seu animal de estimação aproveitar todo o conforto do Kwid.                                        
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="relative block pt-10 px-28 sm:px-52 md:hidden">
                            <button onClick={() => swipeAcessories?.slidePrev()} className="p-1 mr-5" style={{ backgroundColor: '#EFDF00' }}>
                                <svg className="w-12 h-12 transition-all duration-200 ease-out transform rotate-90" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <button onClick={() => swipeAcessories?.slideNext()} className="p-1" style={{ backgroundColor: '#EFDF00' }}>
                                <svg className="w-12 h-12 transition-all duration-200 ease-out transform -rotate-90" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                        </div>
                </div>
            </section>

            <div className="py-20 bg-white">
                <div className="px-8 mx-auto max-w-7xl">
                    <div className="flex flex-col overflow-hidden bg-black shadow-xl md:flex-row">
                    <div className="flex flex-col w-full p-12 md:w-1/2 lg:w-3/5 md:p-10">
                        <h2 className="mb-5 text-4xl font-bold text-left text-white">Tenha o conforto que você merece</h2>
                        <p className="mb-10 text-2xl text-left text-gray-400 md:max-w-md">
                            Confira as condições de financiamento com um de nosssos vendedores                        
                        </p>
                        <div className="mt-auto">
                            <a href="#" className="inline-block w-full px-10 py-5 text-lg font-semibold text-center text-black transition duration-100 outline-none md:w-auto md:text-xl" style={{ backgroundColor: '#EFDF00' }}>Entrar em contato</a>
                        </div>
                    </div>

                    <div className="order-first w-full h-48 bg-gray-700 bg-center bg-cover md:w-1/2 lg:w-2/5 md:h-auto md:order-none" style={{ backgroundImage: "url('https://cdn.group.renault.com/ren/br/renault-new-cars/product-plans/kwid/Resize-1.jpg.ximg.xsmallx2.webp/4f1434aacd.webp')" }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}