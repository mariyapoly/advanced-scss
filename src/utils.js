export const enum_divider = {
    start: 'begin_',
    end: 'end_'
}

export const helper = {
    isString( prop ) {
        return typeof prop === 'string'
    },

    findID( prop, isStart = true ) {
        const type = isStart ? enum_divider.start : enum_divider.end;
        const original_id = prop.split(type)[1];
        return original_id  
    },

    reverseDivider( prop, isStart ) {
        const type        = isStart ? enum_divider.start : enum_divider.end;
        const reverseType = isStart ? enum_divider.end : enum_divider.start;
        const original_id = prop.split(type)[1];
        return reverseType + original_id;
    }
}
