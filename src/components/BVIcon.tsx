interface BVIconProps {
  size?: number;
  className?: string;
}

const BVIcon = ({ size = 40, className = "" }: BVIconProps) => {
  return (
    <div 
      className={`flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="text-sm font-recoleta">BV</span>
    </div>
  );
};

export default BVIcon;
