export default function TokenSavedPopup() {
    return (
        <>
            <div className="saved-popup">
                <p>Token successfully saved ✔️</p>
            </div>
            <style jsx>
                {`
                    .saved-popup {
                        position: absolute;
                        bottom: 2rem;
                        left: 2rem;
                        box-shadow: inset 0 0.1rem 0.4rem
                            var(--outside-box-shadow);
                        background-color: var(--background-color);
                        border-radius: 0.4rem;
                    }
                    .saved-popup p {
                        color: hsl(0, 0%, 84%);
                        font-size: 1.5rem;
                        font-weight: bold;
                        padding: 1rem 2rem;
                    }
                `}
            </style>
        </>
    );
}
