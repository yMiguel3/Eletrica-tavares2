import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Feedback Page
 * Design: Minimalist Corporate - Testimonials and reviews showcase
 * Features: Client testimonials, ratings, contact form with interactive star rating
 */
export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const testimonials = [
    {
      name: "Pet Shop Animal Mania & Cia",
      company: "",
      text: "Excelente atendimento, profissional qualificado e serviço muito bom.... Recomendo...",
      rating: 5,
    },
    {
      name: "Vanda Cassão",
      company: "",
      text: "Ótimo profissional, muito atencioso nota 10",
      rating: 5,
    },
    {
      name: "Samantha Mariano",
      company: "",
      text: "Ótimo eletricista na região de Ribeirão Preto! O pessoal é atencioso e a qualidade do serviço é excelente!",
      rating: 5,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatar mensagem para WhatsApp
    const mensagem = `*FEEDBACK FEITO PELO SITE*\n\nNOME: ${formData.name}\nEMAIL: ${formData.email}\nEMPRESA: ${formData.company}\nAVALIAÇÃO: ${rating} estrela${rating !== 1 ? 's' : ''}\nMENSAGEM: ${formData.message}`;
    
    // Codificar para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Abrir WhatsApp com a mensagem
    window.open(`https://wa.me/5516991970758?text=${mensagemCodificada}`, '_blank');
    
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
    setRating(0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold">Feedback de Clientes</h1>
            <div className="w-20 h-1 bg-accent mt-4"></div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container py-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">O que nossos clientes dizem</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-secondary p-8 rounded-sm border-l-4 border-accent hover:shadow-lg transition-shadow">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  {testimonial.company && <p className="text-sm text-gray-600">{testimonial.company}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Feedback Form */}
        <section className="bg-secondary py-20">
          <div className="container max-w-2xl">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Deixe seu Feedback</h2>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-sm border border-border">
              {/* Name */}
              <div className="mb-6">
                <label className="block font-bold text-primary mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  placeholder="*SeuNome"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block font-bold text-primary mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="*SeuEmail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Company */}
              <div className="mb-6">
                <label className="block font-bold text-primary mb-2">Empresa</label>
                <input
                  type="text"
                  name="company"
                  placeholder="*SuaEmpresa"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Rating */}
              <div className="mb-6">
                <label className="block font-bold text-primary mb-2">Avaliação</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="text-3xl transition-all duration-200 cursor-pointer"
                      style={{
                        color:
                          star <= (hoverRating || rating)
                            ? "#d4a574"
                            : "#d0d0d0",
                      }}
                    >
                      ★
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-sm text-accent font-medium mt-2">
                    Avaliação: {rating} estrela{rating !== 1 ? "s" : ""}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block font-bold text-primary mb-2">Mensagem</label>
                <textarea
                  name="message"
                  placeholder="*SeuFeedback"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 font-bold rounded-sm hover:bg-opacity-90 transition-all"
              >
                Enviar Feedback
              </button>
            </form>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-secondary py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Nossa Trajetória em Números</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              {[
                { number: "1000+", label: "Serviços Realizados" },
                { number: "11+", label: "Anos de Experiência" },
              ].map((stat, index) => (
                <div key={index} className="p-8 bg-white rounded-sm border-l-4 border-accent">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
