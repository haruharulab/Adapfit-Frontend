import PlanList from "../../components/plan/planList";
import * as S from "./style";
import { useEffect, useState } from "react";
import { Plan } from "../../types/plan.type";
import { getPlanList } from "../../apis/plan.api";

export const PlanHome = () => {
    const [planList, setPlanList] = useState<Plan[]>([]);

    useEffect(() => {
        (async () => setPlanList(await getPlanList()))();
    }, []);

    return (
        <S.Contain>
            <PlanList planList={planList} />
        </S.Contain>
    );
};
