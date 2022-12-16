import { useEffect, useState } from "react";
import { Plan } from "../../types/plan.type";
import { getPlan } from "../../apis/plan.api";
import { useParams } from "react-router-dom";

export const PlanDetail = () => {
    const param = useParams();
    const planId = Number(param.id);
    const [plan, setPlan] = useState<Plan | null>(null);

    useEffect(() => {
        if (!planId) return;
        (async () => setPlan(await getPlan(planId)))();
    }, [planId]);

    return (
        <></>
    );
};
