import React, { useState, useCallback } from "react";

type Props = {
    onInsert?: (s: string) => void;
};

const TodoForm = ({ onInsert }: Props) => {
    const [job, setJob] = useState("");
    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setJob(e.target.value);
        },
        [job]
    );
    const onSubmit = useCallback(
        (e: React.FormEvent) => {
            if (onInsert) {
                onInsert(job);
                setJob("");
                e.preventDefault();
            }
        },
        [job, onInsert]
    );
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    placeholder="할 일을 입력"
                    value={job}
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
        </div>
    );
};

export default TodoForm;
