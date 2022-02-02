import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

export default function CameraModal() {
    let [isOpen, setIsOpen] = useState(true);
    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true)
    }

    // Ativação da Camêra
    useEffect(() => {
        
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((video) => {
                const player = document.getElementById('player');
                video.getVideoTracks();
                player.srcObject = video;
            });
    })

    function getPhoto(){
        const capturer = new ImageCapture(stream.stream.getVideoTracks()[0]);
        capturer.takePhoto()
            .then((photo) => {
                var img = document.getElementById("image");
                img.src = URL.createObjectURL(photo);
                setStream({ access: true });
            });
    }

    return(
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
                             <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full pointer-events-none">
                                <video id="player" controls autoPlay style={{ height: '100%', width: '100%' }}></video>
                                <div className="absolute">
                                    <svg className="w-96 h-96" viewBox="0 0 1952 1213" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1530.09 542.818L1452.3 530.904C1442.38 529.394 1432.95 525.865 1424.7 520.573C1416.45 515.281 1409.58 508.361 1404.61 500.317L1375.24 453.033C1333.67 386.258 1273.69 330.754 1201.37 292.122C1129.05 253.49 1046.93 233.097 963.308 233H900.317C816.696 233.095 734.582 253.485 662.259 292.113C589.935 330.741 529.961 386.241 488.387 453.012L456.756 503.768C452.211 511.056 446.121 517.429 438.847 522.508C431.574 527.587 423.266 531.27 414.416 533.336L339.54 550.553C320.897 554.848 303.759 563.461 289.755 575.574C275.751 587.686 265.348 602.895 259.535 619.753C259.287 620.293 259.264 620.938 259.061 621.499C255.79 631.191 254.085 641.273 254 651.421L254 794.415C254.036 821.978 265.949 848.403 287.127 867.894C308.305 887.384 337.019 898.348 366.969 898.381H450.227C463.005 923.259 483.2 944.285 508.46 959.009C533.72 973.733 563.005 981.551 592.906 981.551C622.807 981.551 652.092 973.733 677.352 959.009C702.612 944.285 722.807 923.259 735.586 898.381H1218.41C1231.19 923.259 1251.39 944.285 1276.65 959.009C1301.91 973.733 1331.19 981.551 1361.09 981.551C1390.99 981.551 1420.28 973.733 1445.54 959.009C1470.8 944.285 1490.99 923.259 1503.77 898.381H1587.03C1616.98 898.348 1645.69 887.384 1666.87 867.894C1688.05 848.403 1699.96 821.978 1700 794.415V727.399C1700.12 683.073 1683.09 640.155 1651.96 606.333C1620.82 572.512 1577.62 549.996 1530.09 542.818V542.818ZM1629.82 648.863C1638.76 661.682 1645.45 675.716 1649.64 690.449H1632.22C1614.29 690.445 1597.1 683.929 1584.36 672.318C1577.21 665.68 1571.73 657.672 1568.32 648.863H1629.82ZM299.413 648.863H338.026L326.729 690.449H299.187V651.421C299.187 650.547 299.391 649.716 299.413 648.863ZM592.906 939.967C570.563 939.967 548.722 933.87 530.144 922.446C511.566 911.022 497.087 894.785 488.537 875.787C479.986 856.79 477.749 835.886 482.108 815.719C486.467 795.551 497.226 777.026 513.025 762.487C528.824 747.947 548.953 738.045 570.867 734.033C592.781 730.022 615.495 732.081 636.137 739.95C656.78 747.819 674.423 761.144 686.836 778.241C699.249 795.338 705.875 815.439 705.875 836.001C705.839 863.565 693.925 889.99 672.747 909.48C651.569 928.97 622.856 939.934 592.906 939.967V939.967ZM1361.09 939.967C1338.75 939.967 1316.91 933.87 1298.33 922.446C1279.75 911.022 1265.27 894.785 1256.72 875.787C1248.17 856.79 1245.94 835.886 1250.3 815.719C1254.65 795.551 1265.41 777.026 1281.21 762.487C1297.01 747.947 1317.14 738.045 1339.05 734.033C1360.97 730.022 1383.68 732.081 1404.32 739.95C1424.97 747.819 1442.61 761.144 1455.02 778.241C1467.44 795.338 1474.06 815.439 1474.06 836.001C1474.03 863.565 1462.11 889.99 1440.93 909.48C1419.76 928.97 1391.04 939.934 1361.09 939.967V939.967ZM1587.03 856.795H1517.44C1520.88 836.065 1519.4 814.897 1513.12 794.74C1506.85 774.582 1495.91 755.912 1481.06 740.006C1466.21 724.1 1447.81 711.334 1427.1 702.583C1406.39 693.831 1383.88 689.3 1361.09 689.3C1338.31 689.3 1315.79 693.831 1295.09 702.583C1274.38 711.334 1255.97 724.1 1241.13 740.006C1226.28 755.912 1215.34 774.582 1209.06 794.74C1202.78 814.897 1201.31 836.065 1204.74 856.795H749.255C752.69 836.065 751.217 814.897 744.938 794.74C738.658 774.582 727.721 755.912 712.873 740.006C698.026 724.1 679.619 711.334 658.913 702.583C638.207 693.831 615.691 689.3 592.906 689.3C570.121 689.3 547.605 693.831 526.899 702.583C506.193 711.334 487.786 724.1 472.939 740.006C458.091 755.912 447.154 774.582 440.874 794.74C434.595 814.897 433.122 836.065 436.557 856.795H366.969C348.992 856.795 331.752 850.222 319.04 838.524C306.329 826.826 299.187 810.959 299.187 794.415V732.036H344.375C349.412 732.036 354.304 730.487 358.275 727.635C362.246 724.783 365.067 720.792 366.291 716.295L388.885 633.123C389.719 630.057 389.783 626.856 389.072 623.764C388.361 620.672 386.893 617.769 384.78 615.278C382.667 612.786 379.965 610.77 376.879 609.384C373.792 607.997 370.403 607.277 366.969 607.277H319.273C327.887 599.319 338.687 593.663 350.52 590.913L425.419 573.675C440.188 570.243 454.056 564.112 466.198 555.646C478.339 547.18 488.506 536.552 496.092 524.395L527.61 473.639C565.228 413.228 619.492 363.016 684.929 328.068C750.365 293.12 824.66 274.673 900.317 274.586H963.308C1038.98 274.658 1113.29 293.099 1178.75 328.048C1244.2 362.996 1298.48 413.216 1336.1 473.639L1365.48 520.923C1373.75 534.327 1385.17 545.863 1398.91 554.687C1412.64 563.511 1428.35 569.402 1444.87 571.928L1522.66 583.864C1545.41 587.327 1567.06 595.317 1586.1 607.277H1541.84C1535.85 607.277 1530.1 609.467 1525.87 613.367C1521.63 617.266 1519.25 622.555 1519.25 628.07C1519.23 641.727 1522.15 655.252 1527.82 667.872C1533.49 680.492 1541.81 691.959 1552.3 701.615C1562.8 711.272 1575.26 718.93 1588.97 724.15C1602.68 729.37 1617.38 732.049 1632.22 732.036H1654.81V794.415C1654.81 810.959 1647.67 826.826 1634.96 838.524C1622.25 850.222 1605.01 856.795 1587.03 856.795V856.795Z" fill="black"/>
                                        <path d="M1022.19 565.689H977C971.008 565.689 965.261 567.88 961.024 571.779C956.786 575.679 954.406 580.967 954.406 586.482C954.406 591.997 956.786 597.286 961.024 601.185C965.261 605.085 971.008 607.275 977 607.275H1022.19C1028.18 607.275 1033.93 605.085 1038.16 601.185C1042.4 597.286 1044.78 591.997 1044.78 586.482C1044.78 580.967 1042.4 575.679 1038.16 571.779C1033.93 567.88 1028.18 565.689 1022.19 565.689Z" fill="black"/>
                                        <path d="M592.906 565.689H547.719C541.726 565.689 535.98 567.88 531.743 571.779C527.505 575.679 525.125 580.967 525.125 586.482C525.125 591.997 527.505 597.286 531.743 601.185C535.98 605.085 541.726 607.275 547.719 607.275H592.906C598.898 607.275 604.645 605.085 608.882 601.185C613.119 597.286 615.5 591.997 615.5 586.482C615.5 580.967 613.119 575.679 608.882 571.779C604.645 567.88 598.898 565.689 592.906 565.689Z" fill="black"/>
                                        <path d="M886.633 295.381H874.884C807.104 295.211 740.838 313.821 684.709 348.789C628.58 383.757 585.187 433.463 560.176 491.439L549.331 516.391C547.962 519.546 547.453 522.963 547.85 526.341C548.247 529.719 549.537 532.956 551.608 535.769C553.68 538.582 556.468 540.885 559.73 542.477C562.993 544.068 566.629 544.9 570.321 544.898H886.633C892.625 544.898 898.372 542.708 902.609 538.808C906.846 534.909 909.227 529.62 909.227 524.105V316.174C909.227 310.659 906.846 305.37 902.609 301.471C898.372 297.571 892.625 295.381 886.633 295.381ZM864.039 503.312H603.737C625.199 455.532 661.161 414.452 707.323 384.985C753.485 355.519 807.893 338.913 864.039 337.154V503.312Z" fill="black"/>
                                        <path d="M957.312 295.001H970.474C1046.41 294.832 1120.65 313.478 1183.53 348.513C1246.41 383.548 1295.02 433.35 1323.04 491.438L1335.19 516.438C1336.73 519.599 1337.3 523.022 1336.85 526.407C1336.41 529.791 1334.96 533.035 1332.64 535.853C1330.32 538.672 1327.2 540.979 1323.54 542.574C1319.89 544.168 1315.82 545.001 1311.68 545H957.312C950.599 545 944.161 542.805 939.414 538.898C934.667 534.991 932 529.692 932 524.167V315.834C932 310.309 934.667 305.01 939.414 301.103C944.161 297.196 950.599 295.001 957.312 295.001ZM982.624 503.334H1274.24C1250.2 455.461 1209.91 414.302 1158.19 384.778C1106.48 355.255 1045.53 338.617 982.624 336.855V503.334Z" fill="black"/>
                                        <path d="M775 25H25V1188H775" stroke="black" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M1177 25H1927V1188H1177" stroke="black" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <button onClick={getPhoto} className="absolute bottom-0 px-10 py-5 mb-10 text-xl text-white rounded-lg" style={{ background: '#787d62' }}>Tirar Foto</button>
                             </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}