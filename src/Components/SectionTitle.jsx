
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto mt-20">
            <p className="text-center mb-3 text-yellow-500">{subHeading}</p>
            <h2 className="text-center border-y-2 max-w-max mx-auto text-4xl py-2 rounded-lg mb-16">{heading}</h2>
        </div>
    );
};

export default SectionTitle;