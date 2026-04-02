import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function AlbumItem({ image, name, desc, id }) {
    const navigate = useNavigate();
    return (
        <div key={id} onClick={() => navigate(`/album/${id}`)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img   style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }} className="rounded" src={image} alt="album img" />
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="text-slate-200 text-sm">{desc}</p>
        </div>
    )
}

AlbumItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default AlbumItem