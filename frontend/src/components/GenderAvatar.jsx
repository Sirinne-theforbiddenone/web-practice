function GenderAvatar({ gender }) {

    const isMale = gender === 1;

    return (

        <img
            className="gender-avatar"
            src={
                isMale
                    ? "/images/male.svg"
                    : "/images/female.svg"
            }
            alt={isMale ? "Nam" : "Nữ"}
            title={isMale ? "Nam" : "Nữ"}
        />

    );

}

export default GenderAvatar;