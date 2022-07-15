export default function Item({ title, subtitle, color = "" }) {
  return (
    <div className="main-card rolling-item m-3">
      <div className="rolling-title-container">
        <div className="live-title" style={{color: color}}>{title}</div>
        <div className="rolling-subtitle">{subtitle}</div>
      </div>
    </div>
  );
}
