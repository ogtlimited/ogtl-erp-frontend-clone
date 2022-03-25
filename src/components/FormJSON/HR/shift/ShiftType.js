export const shiftTypeFormJson = {
    title: 'Shift Type Form',
    Fields: [
        {
            name:'shift_name' ,
            type:'text',
            title:'Shift Name',
            required:{
                value:true,
                message:'Shift name is required'
            },

        },
        {
            name:'start_time' ,
            type:'time',
            title:'Start Time',
            required:{
                value:true,
                message:'Start time is required'
            },
        },
        {
            name:'end_time' ,
            type:'time',
            title:'End Time',
            required:{
                value:true,
                message:'End time is required'
            },
        },
    ]
};
