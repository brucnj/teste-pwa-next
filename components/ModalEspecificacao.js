import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function ModalLandings({ modalData }) {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    {/* Use the overlay to style a dim backdrop for your dialog */}
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                             
                            <div className="inline-block w-full max-w-4xl p-6 px-10 pt-10 pb-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                                <div className="absolute top-0 right-0" style={{ backgroundColor: '#EFDF00' }}>
                                    <button onClick={closeModal} className="flex items-center justify-center w-12 h-12 text-balck">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <div>
                                        <h6 className="mb-5 text-2xl font-extrabold text-center">Motor/Performance</h6>
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="flex-col">
                                                <div className="inline-flex w-full px-1 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.motorPerformance.combustivel.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.motorPerformance.combustivel.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-white">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.motorPerformance.cidadeAlcool.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.motorPerformance.cidadeAlcool.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.motorPerformance.cidadeGasolina.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.motorPerformance.cidadeGasolina.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-white">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.motorPerformance.estradaAlcool.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.motorPerformance.estradaAlcool.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.motorPerformance.estradaGasolina.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.motorPerformance.estradaGasolina.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-white">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.motorPerformance.motorizacao.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.motorPerformance.motorizacao.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.motorPerformance.potenciaAlcool.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.motorPerformance.potenciaAlcool.value}</p>
                                                </div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="inline-flex w-full px-1 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.motorPerformance.potenciaGasolina.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.motorPerformance.potenciaGasolina.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-white">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.motorPerformance.tempoAlcool.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.motorPerformance.tempoAlcool.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.motorPerformance.torqueAlcool.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.motorPerformance.torqueAlcool.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-white">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.motorPerformance.torqueGasolina.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.motorPerformance.torqueGasolina.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.motorPerformance.velocidadeMaxAlcool.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.motorPerformance.velocidadeMaxAlcool.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-white">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.motorPerformance.velocidadeMaxGasolina.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.motorPerformance.velocidadeMaxGasolina.value}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="mt-10 mb-5 text-2xl font-extrabold text-center">Mecânica</h6>
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="flex-col">
                                                <div className="inline-flex w-full px-1 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.mecanica.cambio.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.mecanica.cambio.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-white">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.mecanica.direcao.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.mecanica.direcao.value}</p>
                                                </div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="inline-flex w-full px-1 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.mecanica.freios.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.mecanica.freios.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-white">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.mecanica.tracao.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.mecanica.tracao.value}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="mt-10 mb-5 text-2xl font-extrabold text-center">Dimensões</h6>
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="flex-col">
                                                <div className="inline-flex w-full px-1 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.dimensoes.altura.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.dimensoes.altura.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-white">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.dimensoes.comprimento.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.dimensoes.comprimento.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.dimensoes.entreEixos.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.dimensoes.entreEixos.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-white">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.dimensoes.largura.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.dimensoes.largura.value}</p>
                                                </div>
                                            </div>
                                            <div className="flex-col">
                                                <div className="inline-flex w-full px-1 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.dimensoes.ocupantes.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.dimensoes.ocupantes.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-white">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.dimensoes.peso.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.dimensoes.peso.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.dimensoes.portaMalas.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.dimensoes.portaMalas.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-1 py-3 bg-white">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.dimensoes.tanque.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.dimensoes.tanque.value}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="mt-10 mb-5 text-2xl font-extrabold text-center">Chassi/Suspensão</h6>
                                        <div className="block">
                                            <div className="flex-col">
                                                <div className="inline-flex w-full px-3 py-3 bg-gray-200">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.chassiSuspensao.suspensaoDianteira.title}</p>
                                                    <p className="w-1/2 mx-auto font-light text-end">{modalData.chassiSuspensao.suspensaoDianteira.value}</p>
                                                </div>
                                                <div className="inline-flex w-full px-3 py-3 bg-white">
                                                    <p className="w-1/2 pl-2 mx-auto font-extrabold">{modalData.chassiSuspensao.suspensaoTraseira.title}</p>
                                                    <p className="w-1/2 mx-auto text-end">{modalData.chassiSuspensao.suspensaoTraseira.value}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
