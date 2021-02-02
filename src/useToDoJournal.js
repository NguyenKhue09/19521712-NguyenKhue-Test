import { useState } from 'react';


export default initialValue => {
    const [journalList, setJournalData] = useState(initialValue); // giá trị khởi tạo chỉ dc dùng 1 lần : https://www.youtube.com/watch?v=_D16z1kL0wo

    return {
        journalList,
        addJournal: journalText => {
            journalText = {...journalText,id: journalList.length + 1};
            setJournalData([...journalList, journalText]);
        },
        deleteJournal: journalIndex => {
            const newJournalData = journalList.filter((item) => item.id !== Number(journalIndex));
            const changeJournalId = newJournalData.map((journal,index) => journal = {...journal,id: index + 1})
            console.log(changeJournalId);
            setJournalData(changeJournalId);
        },
        updateJournal: (data) =>{
            setJournalData(data);
        }   
    };
};