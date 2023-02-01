import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg";
import { Drawer } from "rsuite";

export default function Header({ setHeaderHeight }) {
  const [open, setOpen] = useState(true);
  const headerRef = useRef(null);
  
  
  useEffect(() => {
    if (localStorage.getItem("schedules")) {
      setOpen(false);
    }
    setHeaderHeight(headerRef.current.offsetHeight);
  }, []);
  
  return (
    <div ref={headerRef}>
      <div className="flex fixed top-0 w-full bg-white justify-center items-center h-20">
        <img src={logo} alt="logo" onClick={() => setOpen(!open)} />
      </div>
      <Drawer
        size="full"
        placement="bottom"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>Apa itu Time Box?</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <div className="md:flex">
            <img
              src="https://i.pinimg.com/564x/b6/3b/f5/b63bf52ddd714b4a453058ccc7a1a2a0.jpg"
              alt=" example of timeboxing"
            />
            <div className="md:p-10 p-2">
              <p className="mt-5">
                Timeboxing adalah sebuah teknik manajemen waktu yang membantu
                seseorang untuk menentukan jangka waktu tertentu untuk
                menyelesaikan suatu tugas atau kegiatan. Timeboxing memungkinkan
                seseorang untuk fokus pada tugas yang sedang dilakukan dan
                menghindari distraksi dengan menetapkan batas waktu yang jelas
                dan terukur. Dalam penggunaan sehari-hari, timeboxing dapat
                digunakan untuk menyelesaikan tugas-tugas seperti menulis
                laporan, membuat presentasi, atau menyelesaikan proyek-proyek
                kerja. Seorang dapat menetapkan waktu tertentu untuk
                menyelesaikan tugas tersebut, misalnya satu jam, dan fokus untuk
                menyelesaikan tugas itu dalam jangka waktu tersebut. Setelah
                waktu habis, mereka dapat mengevaluasi hasil dan menentukan
                tindakan selanjutnya jika diperlukan.
              </p>
              <ul className="mt-2">
                <p>Secara umum timeboxing membantu seseorang untuk: </p>
                <li className="list-disc">Menentukan prioritas</li>
                <li className="list-disc">Membuat rencana kerja yang jelas</li>
                <li className="list-disc">Menghindari procrastination</li>
                <li className="list-disc">Mengoptimalkan produktivitas</li>
              </ul>
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <a href="https://www.instagram.com/wdz.dev/" className="text-[#0f3433]">Development by Waidz</a>
          </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
}
