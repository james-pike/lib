import { component$, useSignal } from '@builder.io/qwik';
import { Card } from "../ui/Card";
import { CardHeadline } from "../ui/CardHeadline";
import Items from './Items';
import ClassSelect from '../widgets/ClassSelect';

interface Props {
    title?: any;
    subtitle?: any;
    highlight?: any;
    classes?: any;
}

export default component$((props: Props) => {
    const { title = "", subtitle = "", highlight = "", classes = {} } = props;
    const selectedClass = useSignal('Wizard'); // Default class

    return (
        <section class="scroll-mt-16">
            <Card.Root>
                <Card.Header class="relative">
                    <div class="flex justify-between">
                        <CardHeadline 
                            title={title} 
                            subtitle={subtitle} 
                            highlight={highlight} 
                            classes={classes?.headline} 
                            align="left" 
                        />
                        <div class=" flex items-end">
                        <ClassSelect selectedClass={selectedClass} />
                        </div>
                    </div>
                </Card.Header>
                <Card.Content class="p-2">
                    <Items selectedClass={selectedClass.value} />
                </Card.Content>
            </Card.Root>
        </section>
    );
});