import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs';

const CompCreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [Url_image, setUrl_image] = useState(''); // Nuevo estado para la URL de la imagen
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        // Validaciones
        const newErrors = {};
        if (!title.trim()) {
            newErrors.title = 'El título es obligatorio';
        }
        if (!content.trim()) {
            newErrors.content = 'El contenido es obligatorio';
        }
        if (!Url_image.trim()) {
            newErrors.Url_image = 'La URL de la imagen es obligatoria';
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                await axios.post(URI, {
                    title: title,
                    content: content,
                    Url_image: Url_image // Incluye la URL de la imagen
                });
                navigate('/');
            } catch (error) {
                console.error("Error creating blog:", error);
            }
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Añade tu experiencia viajer@</h3>
                            <form onSubmit={store}>
                                <div className='mb-3'>
                                    <label className="form-label">Título</label>
                                    <input
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        type="text"
                                        className={`form-control ${errors.title && 'is-invalid'}`}
                                    />
                                    {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                                </div>
                                <div className='mb-3'>
                                    <label className="form-label">Contenido</label>
                                    <textarea
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        type="text"
                                        className={`form-control ${errors.content && 'is-invalid'}`}
                                    />
                                    {errors.content && <div className="invalid-feedback">{errors.content}</div>}
                                </div>
                                <div className='mb-3'>
                                    <label className="form-label">Url de tu foto</label>
                                    <input
                                        value={Url_image}
                                        onChange={(e) => setUrl_image(e.target.value)}
                                        type="text"
                                        className={`form-control ${errors.Url_image && 'is-invalid'}`}
                                    />
                                    {errors.Url_image && <div className="invalid-feedback">{errors.Url_image}</div>}
                                </div>
                                <button type="submit" className='btn btn-primary'>Store</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompCreateBlog;

