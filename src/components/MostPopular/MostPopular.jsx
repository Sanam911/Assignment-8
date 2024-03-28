

const MostPopular = () => {
    return (
        <div>
            <h3 className="text-4xl font-bold text-center">Most Popular Books</h3>

           <div className="grid md:grid-cols-3 ">
           <div className="card w-96 bg-base-100 shadow-xl p-4">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/wKrprRd/harry.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Harry Potter</h2>
                    <p> Harry Potter, is a beloved fantasy series by J.K. Rowling, following young wizard Harry and his friends at Hogwarts as they battle dark forces, including the sinister Voldemort. Filled with magic, adventure, and themes of friendship and courage, the series has enchanted readers worldwide.</p>
                    <div className="card-actions">
                        <button className="btn  bg-green-500 text-white">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl p-4">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/vvXQcfw/shakespear.webp" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shakespeare</h2>
                    <p>Shakespeare is not primarily known for writing novels. Some of his most famous works include tragedies works explore themes such as love, power, jealousy, and the human condition, and they continue to be studied and performed worldwide for their profound insights into the complexities of life.</p>
                    <div className="card-actions">
                        <button className="btn bg-green-500 text-white">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl p-4">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/YNws3Nd/himu.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Himu Shomogro</h2>
                    <p> "Himu Shomogro" is a series of novels by Bangladeshi author Humayun Ahmed, featuring the character Himu, a philosophical young man who challenges societal norms with his unconventional lifestyle and perspective on life.</p>
                    <div className="card-actions">
                        <button className="btn  bg-green-500 text-white">Buy Now</button>
                    </div>
                </div>
            </div>
           </div>


        </div>
    );
};

export default MostPopular;