import Image from "next/image";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_9F3IY-7GW6yavKWaI8yVjS79LVTkh_OUrU2qDwTd_JWwIkmXfwkQ_jWGrKRFKISlZES6qoUSPIGofJi84LOGbBgUc7Sijr8OpXanZ5w4uYNsSJABMQvb63yxDGgINh14QpYjcwU3Y6FVEjG7NajRkk-3WqYwSV18ybNKlgl2l_78fSGcOsnPR5LuRlcEf83BgVYGr1yl261iZvda3gvwIpPgNECq-WH429b54fzecTYFgGHOMSyvLRryei9mstNRMr22PkSBo9c",
    alt: "Developer workspace",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQKvQEWOiZEp3v-wwdPV9wITf5f1zw1apL5QwWn8FDewisr1C_V7GDkiRdg7iXANjhDf9Z6KEvwxm10MRn5mS-EQAxx_-MRzX0vhKtv706qCA-av0_I62C3YjGiFU5sFzMXoK1imUVM8T4pK8GBk_CIDS3drx0mW3UAf-DoLL-uYtmjcS1Gq8WW_90rT5xi244SQ6TYoxfmEW50UA8MIAR5DWj5Uhf7b72Jy8i02AupOAn_59d8yRZ-49XfnyLPlGHPLRjvgD4YCU",
    alt: "Muay Thai training gym",
    className: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPfZYwPde6ZordPYe-eTbjdLIAeh_D7axDsGrESoaw8byUYP_UdY_MK158OWNJ4V8m2U7l2sLB9d_LiRQjY2XXL3eKBp7lkq-X2oY4_cIfo9mG0ebpIo1VMdxenzHoF-EtiUCmUdnkmA4EarwYX8uxjMKp3cNlAG1jsN-ndbo4VNZLaGjFVfxVtPYWWpc0HEDoo6p6wDbPxrl8OGqSWjd6x2_Xcrwwgy4fRPcZ8fHWQjxeDvxYGd1nN3Szcdt-BnNjF44olEBuZf0",
    alt: "Laravel code on screen",
    className: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtLrhe2Q96F1Esc2YQmugjFixg9ni7y3cYMzJW8uKvLB5btNhkS-fl2jSe8d-ONazH4UAKzbBSJYMo688MK-GBzRlNRtn7owHRl6BH1OJodyAoPLB9FDShSCjC_7LYo3TiAQ8P04jww3kaLXrE4OAExIUNT7WuZiimC38ehk4rq3yM1bg3c64xtdYjaudVKSkmWg6zjiihCwgXO6RhZopqYq9MMogkA8vYfUdi4s7RK__ydzSh_9nZll_c-lDNjBTCnidpaTYkgGI",
    alt: "Modern tech workspace",
    className: "col-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 border-t border-border-subtle">
      <h2 className="font-headline-lg text-headline-lg mb-12">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className={`${img.className} rounded-xl overflow-hidden bg-surface-container relative`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
