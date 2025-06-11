export default function page({ params }) {
  const idP = parseInt(params?.id);
  const data = [
    {
      id: 1,
      serviceName: "Logo Design Pro",
      category: "Graphic Design",
      description: "Custom high-resolution logos with source files.",
      price: 45,
      rating: 4.8,
      providerName: "CreativePixel",
      deliveryTime: "2 days",
      imgUrl: "/96433A27_1.jpeg",
    },
    {
      id: 2,
      serviceName: "Speedy Website Audit",
      category: "Web Development",
      description:
        "Full SEO and performance audit of your website with action plan.",
      price: 30,
      rating: 4.6,
      providerName: "WebFixNow",
      deliveryTime: "1 day",
      imgUrl: "/96433A27_2.jpeg",
    },
    {
      id: 3,
      serviceName: "AI Blog Writer",
      category: "Content Writing",
      description:
        "AI-powered blog writing service for your niche (up to 1000 words).",
      price: 20,
      rating: 4.9,
      providerName: "PromptFlow AI",
      deliveryTime: "3 days",
      imgUrl: "/96433A27_2.jpeg",
    },
    {
      id: 4,
      serviceName: "Resume & LinkedIn Polish",
      category: "Career Services",
      description: "Revamp your CV and LinkedIn profile to attract recruiters.",
      price: 35,
      rating: 4.7,
      providerName: "CareerBoost",
      deliveryTime: "2 days",
      imgUrl: "/96433A27_2.jpeg",
    },
    {
      id: 5,
      serviceName: "Shopify Store Setup",
      category: "E-commerce",
      description:
        "Launch your Shopify store with custom theme and 5 listed products.",
      price: 150,
      rating: 4.5,
      providerName: "StoreCraft",
      deliveryTime: "5 days",
      imgUrl: "/96433A27_2.jpeg",
    },
    {
      id: 6,
      serviceName: "Social Media Kit",
      category: "Marketing",
      description: "Custom branded templates for IG, FB, and Twitter.",
      price: 50,
      rating: 4.9,
      providerName: "DesignTribe",
      deliveryTime: "3 days",
      imgUrl: "/96433A27_2.jpeg",
    },
    {
      id: 7,
      serviceName: "Full-stack Web App Build",
      category: "Software Dev",
      description: "MERN stack application development with admin dashboard.",
      price: 700,
      rating: 5.0,
      providerName: "CodeFusion",
      deliveryTime: "10 days",
      imgUrl: "/96433A27_2.jpeg",
    },
    {
      id: 8,
      serviceName: "Product Photo Retouching",
      category: "Photo Editing",
      description: "High-quality retouching for 20 eCommerce product photos.",
      price: 25,
      rating: 4.6,
      providerName: "SnapFix Studio",
      deliveryTime: "2 days",
      imgUrl: "/96433A27_2.jpeg",
    },
    {
      id: 9,
      serviceName: "Online Tutoring - Python",
      category: "Education",
      description: "1-on-1 Python programming tutoring (1-hour session).",
      price: 18,
      rating: 4.8,
      providerName: "CodeCoach Sam",
      deliveryTime: "1 day",
      imgUrl: "/96433A27_2.jpeg",
    },
    {
      id: 10,
      serviceName: "Voiceover (American Male)",
      category: "Voice & Audio",
      description:
        "Professional voiceover for commercials or intros (up to 60 seconds).",
      price: 40,
      rating: 4.7,
      providerName: "VocalPro Mike",
      deliveryTime: "2 days",
      imgUrl: "/96433A27_2.jpeg",
    },
  ];

  const service = data.find((d) => d.id === idP);
  
  if(service){
    return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={service?.imgUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {service?.serviceName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{service?.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{service?.category}</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
  }else{
    return <div>
      Service Not Found
    </div>
  }
  
}
