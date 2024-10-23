import { Button } from '@/components-v2/ui/button'
import { RootState, useAppDispatch } from '@/redux-rtk-v2/app/store';
import { initialPromptState, resetFilter } from '@/redux-rtk-v2/features/prompt/prompFilterSlice';
import { X } from 'lucide-react'
import { useSelector } from 'react-redux';

function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

function ResetFilter() {

    const filter = useSelector((state: RootState) => state.prompt.filter);
    const dispatch = useAppDispatch();

    const isDefault = isEqual(filter, initialPromptState.filter);

    if (isDefault) {
        return null;
    }



  return (
    <Button onClick={()=> dispatch(resetFilter())} variant={"outline"}><X className='mr-2 size-5' /> Reset</Button>
  )
}

export default ResetFilter