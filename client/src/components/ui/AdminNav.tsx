import { cn } from "../../lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Collapse } from "@mui/material";

export const AdminNav = ({ 
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y:0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  to={item.href}
                  key={item.title}
                  className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
      >
        <Collapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseY = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseY.set(e.pageY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        "flex flex-col w-fit p-2 h-fit gap-2 items-center rounded-full bg-[#313131] backdrop-blur-sm overflow-visible",
        className
      )}
    >
      {items.map((item, index) => (
        <IconContainer
          mouseY={mouseY}
          key={item.title}
          {...item}
          index={index}
          totalItems={items.length}
        />
      ))}
    </div>
  );
};

function IconContainer({
  mouseY,
  title,
  icon,
  href,
  // index,
  // totalItems,
}: {
  mouseY: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  index: number;
  totalItems: number;
}) {
  let ref = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState(false);

  return (
    <Link to={href}>
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-full bg-[--primary] text-black flex items-center justify-center relative shadow-lg"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, x: "-20px", y: "-50%" }}
              exit={{ opacity: 0, x: "-50%", y: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-[--secondary] border  dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute top-1/2 -translate-y-1/2 -right-24 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="flex items-center justify-center w-12 h-12 p-3"
        >
          {icon}
        </motion.div>
      </div>
    </Link>
  );
}