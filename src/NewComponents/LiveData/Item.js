export default function Item({color, icon, title, subtitle}) {
    return (
      <div className="main-card live-item m-3">
        <span style={{backgroundColor: color}}>icon</span>
        <div className="live-title-container">
            <div className="live-title">{title}</div>
            <div className="live-subtitle">{subtitle}</div>
        </div>
      </div>
    );
  }