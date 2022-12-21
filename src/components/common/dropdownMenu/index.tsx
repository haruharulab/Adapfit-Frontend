import { ReactNode } from "react"
import * as S from "./style";

export interface DropdownMenuOption {
    text: string,
    callback: () => void
};

interface DropdownMenuProps {
    title: string | ReactNode,
    menus: DropdownMenuOption[],
    mark?: boolean
}

export const DropdownMenu = ({
    title,
    menus,
    mark
}: DropdownMenuProps) => (
    <S.DropdownMenu>
        <S.DropdownTitle>{title}{mark && <S.DropdownMark />}</S.DropdownTitle>
        <S.DropdownContent>
            {menus.map(menu => (
                <S.Option key={menu.text} onClick={menu.callback}>
                    {menu.text}
                </S.Option>
            ))}
        </S.DropdownContent>
    </S.DropdownMenu>
)