import zod from 'zod';

const changePwShema = zod.object({
    oldPassword: zod.string().min(6),
    newPassword: zod.string().min(6),
})
export default changePwShema;