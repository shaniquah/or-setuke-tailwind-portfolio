import { motion } from "framer-motion";
import { list } from "postcss";

export default function TabList({ TAB_DATA }) {
    return (
        <motion.ul
        key={TAB_DATA.id}
        initial="hidden"
        animate="visible"
        variants={list}
        className="list-disc pl-2"
        >
            {TAB_DATA.content.map((itemData, index) => (
                <motion.li key={index} variants={item}>
                    {itemData}
                </motion.li>
            ))}
        </motion.ul>
    )
}