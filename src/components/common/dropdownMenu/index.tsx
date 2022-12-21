import { ReactNode } from "react"
import * as S from "./style";

export interface DropdownMenuOption {
    text: string,
    callback: () => void
};

interface DropdownMenuProps {
    title: string | ReactNode,
    menus: DropdownMenuOption[]
}

export const DropdownMenu = ({
    title,
    menus,
}: DropdownMenuProps) => (
    <S.DropdownMenu>
        <S.Title>{title}</S.Title>
        <S.DropdownContent>
            {menus.map(menu => (
                <S.Option key={menu.text} onClick={menu.callback}>
                    {menu.text}
                </S.Option>
            ))}
        </S.DropdownContent>
    </S.DropdownMenu>
)