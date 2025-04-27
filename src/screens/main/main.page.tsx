"use client";
import React from "react";
import { motion } from "framer-motion";
import { MoveRight, BookOpen } from "lucide-react";
import { Button } from "src/shared/ui/button";
import { AnchorButton } from "src/shared/ui/anchor-button";
import * as Paragraph from "src/shared/components/typography/paragraph.typo";

const Page = () => {
  const [titleNumber, setTitleNumber] = React.useState(0);
  const titles = React.useMemo(() => ["amazing", "new", "wonderful", "beautiful", "smart"], []);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <React.Fragment>
      <div>
        <Button variant="secondary" size="sm" className="gap-4">
          Read our launch article <MoveRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex gap-4 flex-col">
        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
          <span className="text-spektr-cyan-50">This is something</span>
          <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
            &nbsp;
            {titles.map((title, index) => (
              <motion.span
                className="absolute font-semibold text-primary"
                key={index}
                initial={{ opacity: 0, y: -100 }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? { y: 0, opacity: 1 }
                    : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                }
              >
                {title}
              </motion.span>
            ))}
          </span>
        </h1>

        <Paragraph.Muted className="text-lg md:text-xl max-w-2xl text-center">
          Managing a small business today is already tough. Avoid further complications by ditching
          outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and
          faster than ever.
        </Paragraph.Muted>
      </div>
      <div className="flex flex-row gap-3">
        <AnchorButton className="gap-4" size="lg" variant="outline" href="/docs">
          Read Docs <BookOpen className="size-4" />
        </AnchorButton>
        <AnchorButton className="gap-4" size="lg" href="/signin">
          Signin Here <MoveRight className="size-4" />
        </AnchorButton>
      </div>
    </React.Fragment>
  );
};

export default Page;
