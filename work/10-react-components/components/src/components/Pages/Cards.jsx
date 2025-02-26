import Button from '../Button/Button';

function Cards({ setCurrentPage }) {
    return (
        <div className="cards-container">

            <div className="card">
                <h3>Playful Kittens</h3>
                <p>Meet our adorable kittens, ready for fun and adventure!</p>
                <Button
                    visual="link"
                    onClick={() => setCurrentPage('text')}
                    className="meet-kittens-btn"
                >
                    Meet the Kittens
                </Button>
            </div>


            <div className="card">
                <h3>Cat Care Tips</h3>
                <p>Learn how to take care of your feline friends, from feeding to grooming.</p>
            </div>

            <div className="card">
                <h3>Cat Toys</h3>
                <p>Check out the best toys to keep your cat entertained and happy.</p>
            </div>
        </div>
    );
}

export default Cards;
