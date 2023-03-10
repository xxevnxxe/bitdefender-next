import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa/index";

import Bitdefender from "@/assets/images/bitdefender.png";
import GoldReseller from "@/assets/images/hd/reseller-gold.png";
import DSG from "@/assets/images/hd/digitalsolusigrup.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="max-width">
          <div className="footer-content">
            <div className="footer-link">
              <div className="flex-column gap-5" style={{ maxWidth: 350 }}>
                <Image src={Bitdefender} width={150} />
                <span className="text-normal">
                  GlobalLeader in Cybersecurity. Protecting millions of consumer
                  and business environments since 2001
                </span>
              </div>
              <div className="footer-grid">
                <ul>
                  <span>Products</span>
                  <li>
                    <Link href="/home/familypack">Family Pack</Link>
                  </li>
                  <li>
                    <Link href="/home/antivirusplus">Antivirus Plus</Link>
                  </li>
                  <li>
                    <Link href="/home/totalsecurity">Total Security</Link>
                  </li>
                  <li>
                    <Link href="/home/internetsecurity">Internet Security</Link>
                  </li>
                </ul>
                <ul>
                  <span>Resource</span>
                  <li>
                    <Link href="https://bitdefender.com" target={"_blank"}>
                      Bitdefender Official
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://facebook.com/bitdefender/"
                      target={"_blank"}
                    >
                      Bitdefender Facebook
                    </Link>
                  </li>
                </ul>
                <ul>
                  <span>Quick Links</span>
                  <li>
                    <Link href="/home">For Home</Link>
                  </li>
                  <li>
                    <Link href="/business">For Business</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="flex-column">
                <div className="flex-row gap-10 margin-bottom-15">
                  <a href="https://wa.me/6281233345119" target={"_blank"}>
                    <FaWhatsapp color="rgba(255,255,255,0.5)" size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/digitalsolusi/"
                    target={"_blank"}
                  >
                    <FaInstagram color="rgba(255,255,255,0.5)" size={20} />
                  </a>
                  <a href="https://web.facebook.com/ptdsg/" target={"_blank"}>
                    <FaFacebook color="rgba(255,255,255,0.5)" size={20} />
                  </a>
                </div>
                <span className="text-normal">
                  Copyright 2023 PT. Digital Solusi Grup
                </span>
                <div className="flex-row gap-5">
                  <Link className="text-normal" href="/">
                    Legal Information
                  </Link>
                  <span className="text-normal">|</span>
                  <Link className="text-normal" href="/">
                    Terms of Services
                  </Link>
                </div>
              </div>
              <a href="https://digitalsolusigrup.co.id" target="_blank">
                <div className="flex-row align-center gap-25">
                  <Image
                    style={{ objectFit: "contain" }}
                    width={125}
                    src={DSG}
                    alt=""
                  />
                  <Image
                    style={{ objectFit: "contain" }}
                    width={125}
                    src={GoldReseller}
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
