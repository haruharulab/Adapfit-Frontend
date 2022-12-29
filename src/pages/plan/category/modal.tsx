import { useState } from "react";
import { FormSubmitButton } from "../../../components/common/button/style";
import { Input } from "../../../components/common/input/style";
import Modal from "../../../components/common/modal/modal";
import { PlanCategory } from "../../../types/plan.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";

interface CategoryManageModalProps {
  selectCategory: PlanCategory | null,
  loadCategoryList: () => void,
}

const ManageCategoryModal = ({
  selectCategory,
  loadCategoryList
}: CategoryManageModalProps) => (<>
  <CreateCategoryModal loadCategoryList={loadCategoryList} />
  <UpdateCategoryModal selectCategory={selectCategory} loadCategoryList={loadCategoryList} />
</>);

interface CreateCategoryModalProps {
  loadCategoryList: () => void
}

const CreateCategoryModal = ({
  loadCategoryList
}: CreateCategoryModalProps) => {
  const {ajax} = useAjax();
  const {closeModal} = useModal();
  const [name, setName] = useState<string>('');

  const createCategory = async () => {
    const [, error] = await ajax({
      url: 'category',
      method: HttpMethod.POST,
      config: {
        params: {
          name
        }
      }
    });
    if (error) return;
    closeModal('createCategory');
    loadCategoryList();
  }

  return (
    <Modal id='createCategory' title="플랜 카테고리 생성">
      <form onSubmit={e => {
        e.preventDefault();
        createCategory();
      }}>
        <Input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder='카테고리 이름'
          required
        />
        <FormSubmitButton>카테고리 생성</FormSubmitButton>
      </form>
    </Modal>
  );
}

interface UpdateCategoryModalProps {
  selectCategory: PlanCategory | null,
  loadCategoryList: () => void
}

const UpdateCategoryModal = ({
  selectCategory,
  loadCategoryList
}: UpdateCategoryModalProps) => {
  const {ajax} = useAjax();
  const {closeModal} = useModal();
  const [name, setName] = useState<string>('');

  const updateCategory = async () => {
    if (!selectCategory) return alert('선택된 카테고리가 없습니다');
    const [, error] = await ajax({
      url: `category/${selectCategory.categoryId}`,
      method: HttpMethod.PUT,
      config: {
        params: {
          name
        }
      }
    });
    if (error) return;
    closeModal('updateCategory');
    loadCategoryList();
  }

  return (
    <Modal
      id='updateCategory'
      title="카테고리 이름 수정"
      callback={() => {
        if (!selectCategory) return;
        setName(selectCategory.name);
      }}
    >
      <form onSubmit={e => {
        e.preventDefault();
        updateCategory();
      }}>
        <div>
          <span>카테고리 이름</span>
          <Input
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder='카테고리 이름'
            required
          />
        </div>
        <FormSubmitButton>카테고리 수정</FormSubmitButton>
      </form>
    </Modal>
  );
}

export default ManageCategoryModal;