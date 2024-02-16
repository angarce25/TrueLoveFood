import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        comments: ''
    });
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validar campos
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = 'Por favor, complete este campo';
            }
        });
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Aquí puedes manejar la lógica para enviar el formulario
            // onSubmit(formData);

            // Mostrar el modal después de enviar el formulario
            setShowModal(true);
        }
    };

    return (
        <div className="container mb-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center">Formulario de Contacto</h2>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre y Apellidos</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name && 'is-invalid'}`}
                                id="name"
                                maxLength={60}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input
                                type="tel"
                                pattern="[0-9]{10}"
                                className={`form-control ${errors.phone && 'is-invalid'}`}
                                id="phone"
                                maxLength={10}
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email && 'is-invalid'}`}
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="comments" className="form-label">Comentarios</label>
                            <textarea
                                className={`form-control ${errors.comments && 'is-invalid'}`}
                                id="comments"
                                maxLength={400}
                                value={formData.comments}
                                onChange={handleChange}
                                required
                            />
                            {errors.comments && <div className="invalid-feedback">{errors.comments}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>

            {/* Modal de agradecimiento */}
            {showModal && (
                <div className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">¡Gracias por contactarnos!</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>Hemos recibido tu mensaje. Nos pondremos en contacto contigo lo antes posible.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
