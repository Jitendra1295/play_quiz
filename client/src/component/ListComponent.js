import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListComponent = () => {
    const navigate = useNavigate();

    const [categories, setCategories] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:5000/api/quiz/category')
            .then(response => {
                console.log("category:", response.data[0].quiz);
                setCategories(response.data[0].quiz);
            })
            .catch(error => {
                console.error('Error fetching quiz data:', error);
            });
    }, []);

    const handleQuizType = (id) => {
        navigate(`/quiz/question/${id}`);
    }

    return (
        <div className='list-container'>
            <div className="category-container">
                {categories && categories.map((category) => (
                    <div className="category-card" style={{ width: "200px", height: "100px" }} key={category.id} onClick={() => { handleQuizType(category.id) }}>
                        <h3>{category.title}</h3>
                        {/* <p>{category.points} pts</p> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListComponent
