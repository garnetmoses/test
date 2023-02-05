import React, {ReactNode} from "react";
import {Flex} from "@chakra-ui/react";

type Props = {
    children: ReactNode;
};
const Main = (props: Props) => {
    return (
        <div className="max-w-screen-2xl px-4 mx-auto flex flex-wrap items-center justify-center">
            <Flex
                w="100%" minHeight={450} bg='#fafbfe'>
                {props.children}
            </Flex>
        </div>
    );
};
export default Main;
